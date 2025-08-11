const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const { minLength, maxLength, number } = require("zod")
const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl)
//mongoose.connect("mongodb+srv://100xDevFayaz:fayazuddin@cluster0.x82q5ks.mongodb.net/")

const userSchema = new mongoose.Schema({

  userName : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    minLength : 3,
    maxLength : 50,
  },

  firstName : {
    type :String,
    required : true,
    trim : true,
  },

  lastName : {
    type :String,
    required : true,
    trim : true,
  },

  password : {
    type :String,
    required : true,
    minLength : 6
  }
})

const balanceSchema = new mongoose.Schema({
  userId: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "PaytmUsers",
    required : true
  },
  balance : {
    type :Number,
  required : true
  }
})

const PaytmUsers = mongoose.model("PaytmUsers", userSchema)
const userBalance = mongoose.model("userBalance", balanceSchema)

module.exports = {PaytmUsers, userBalance}