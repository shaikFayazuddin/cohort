const express = require("express")
const zod = require("zod")
const router = express.Router()
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("../config")
const {PaytmUsers, userBalance} = require("../db")
const { is } = require("zod/v4/locales")
const { authMiddleware } = require("../middleware")



const userCheck = zod.object({
  userName : zod.email(),
  firstName : zod.string().min(3),
  lastName : zod.string().min(3),
  password : zod.string().min(6)
})

const signinCheck = zod.object({
  userName : zod.email(),
  password : zod.string().min(6)
})

const updateDataCheck = zod.object({
    updated_passwordCheck : zod.string().min(6).optional(),
    updated_firstName_check : zod.string().min(3).optional(),
    updated_lastName_check : zod.string().min(3).optional()
})

router.post("/signin", async (req, res)=>{
  const result = signinCheck.safeParse(req.body)

  if(!result){
    return res.status(411).json({
      msg : "Invalid credentials"
    })
  }

  const isUserExists = await PaytmUsers.findOne({
    userName : req.body.userName,
    password : req.body.password
  })

  // console.log(isUserExists)

  if(!isUserExists){
    return res.status(400).json({
      msg : "Can't find username, try to signup"
    })
  }

  const token = jwt.sign({userId : isUserExists._id}, JWT_SECRET)

  res.json({
    token : token
  })
})

router.post("/signup", async (req,res)=>{
  const {userName, firstName, lastName, password} = req.body 
  const result = userCheck.safeParse({
    userName : userName,
    firstName : firstName,
    lastName : lastName,
    password : password
  })

  if(!result.success){
    return res.status(411).json({
      msg : 'Invalid Inputs/User already exits'
    })
  }

  const existingUser = await PaytmUsers.findOne({
    userName : userName
  })

  if(existingUser){
    return res.status(411).json({
      msg : "User already exits, try to sign in"
    })
  }


  const user = await PaytmUsers.create({
    userName : userName,
    firstName : firstName,
    lastName : lastName,
    password : password
  })
  
  const randomBalance = Math.floor(Math.random()*10000) + 1
  // console.log("the random balance is", randomBalance)
  
  
  const userId = user._id

  const balance = await userBalance.create({
    userId : userId,
    balance : randomBalance
  })
  // console.log("the balance is", balance)

  const token = jwt.sign({
    userId : userId
  }, JWT_SECRET)

  if(user){
    res.status(200).json({
      msg : "User created successfully",
      openingBalance : randomBalance,
      token : token
    })
  }
})


router.put("/", authMiddleware, async (req, res)=>{
    const result = updateDataCheck.safeParse(req.body)

    if(!result){
      return res.status(400).json({
        msg : "Issue in updating values"
      })
    }


    await PaytmUsers.updateOne({_id:req.userId},req.body)

    res.status(200).json({
      msg : "Profile updated successfully"
    })
})

router.get("/bulk",  async (req,res)=>{
  const filter = req.query.filter || ""
  // console.log("the filter is", filter)

  const filteredUsers = await PaytmUsers.find({
    $or : [
      {firstName : {"$regex" :filter}},
      {lastName : {"$regex" :filter}}
    ]
  })
  const finalFilteredUsers = filteredUsers.map(({_id, userName, firstName, lastName})=>({_id,userName, firstName, lastName}))

  // console.log("all filtered resultes are", filteredUsers)
  res.status(200).json({
    users : finalFilteredUsers
  })
})
module.exports = router