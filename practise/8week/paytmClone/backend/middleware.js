const { JWT_SECRET } = require("./config")
const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
  const authHeader = req.headers.authorization 
  // console.log("the authHeader is", authHeader)
  if(!authHeader){
    return res.status(400).json({
      msg : "Can't authenticate"
    })
  }

  const token = authHeader.split(' ')[1]
  // console.log("the token is ", token)

  try{
    const decoded = jwt.verify(token, JWT_SECRET)
    // console.log("the decode is :", decoded)
    //console.log("THE REQ IS", req)
    req.userId = decoded.userId
    next()

  }catch(err){
    // console.log("there is error in decoing token", err)
    return res.status(400).json({
      msg : "Unable to decode the jwt token`"
    })
  }
}

module.exports = {
  authMiddleware
}