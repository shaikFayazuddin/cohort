const express = require("express")
const { userBalance } = require("../db")
const { authMiddleware } = require("../middleware")
const { default: mongoose } = require("mongoose")
const { is } = require("zod/v4/locales")
const router = express.Router()

router.get("/balance", authMiddleware, async(req,res)=>{
  const userId = req.userId
  const bankBalance = await userBalance.findOne({
    userId : userId
  })
  console.log("the userId is", bankBalance)

  res.status(200).json({
    Balance : bankBalance.balance
  })
})

router.post("/transfer", authMiddleware, async(req,res)=>{

  const session = await mongoose.startSession()
  session.startTransaction()

  const {toAccount, transferAmount} = req.body
  const userId = req.userId
  const bankBalance = await userBalance.findOne({
    userId : userId
  }).session(session)
  console.log("the login user bank balance is", bankBalance.balance)

  if(!bankBalance || bankBalance.balance < transferAmount){
    session.abortTransaction()
    return res.status(400).json({
      msg : "Insufficient balance"
    })
  }
  const isAccountExists = await userBalance.findOne({
    userId : toAccount
  }).session(session)
  console.log("the account to which the money is being transfered", isAccountExists)
  if(!isAccountExists){
    session.abortTransaction()
    return res.status(400).json({
      msg : "Account does not exists, Invalid Account"
    })
  }

  
  await userBalance.updateOne({userId:userId},{$inc:{balance:-transferAmount}}).session(session)
  await userBalance.updateOne({userId:toAccount}, {$inc:{balance:transferAmount}}).session(session)
  
  session.commitTransaction()

  res.status(200).json({
    msg : "Transfer successful"
  })
})

module.exports = router