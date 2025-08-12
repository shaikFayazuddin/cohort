import { useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { DB_URL } from "../config";
import { useState } from "react";
import axios from "axios";

export function SendMoney(){

  const [searchParams] = useSearchParams()
  const toUserId = searchParams.get("id") 
  const toUserName = searchParams.get("name")
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()

  // console.log("to user id", toUserId)
  // console.log("to user name", toUserName)

  const handleClick = ()=>{
    // console.log("initiating transfer")
    // console.log(localStorage.getItem("token"))
    const token = localStorage.getItem("token")
    // const DB_URL = 'http://localhost:3000'
    axios.post(`${DB_URL}/api/v1/account/transfer`,{
      toAccount : toUserId,
      transferAmount : amount
    }, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log("the response from sending money is", response)
      navigate('/dashboard')
    })
    .catch((error)=>{
      alert(error.response.data.msg)
      // console.log("the error is", error)
    })
  }

  return <div className="flex items-center justify-center h-screen bg-black">
      <div className="border-2 border-black-500  bg-gray-950 text-white rounded-lg shadow-md flex flex-col justify-evenly items-center w-120 h-180 ">
    <h1>Send Money</h1>
    <h1>{toUserName}</h1>
    <InputBox onChange={e=>setAmount(e.target.value)} inputLabel={"Amount(in Rs)"} inputPlaceholder={"Enter Amount"} inputType={"text"}></InputBox>
    <Button buttonName={"Initiate Transfer"} onClick={handleClick} ></Button>
  </div>
  </div>
}