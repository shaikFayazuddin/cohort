import { useNavigate, useSearchParams } from "react-router";
import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";
import { DB_URL } from "../config";
import { useState } from "react";
import axios from "axios";

export function SendMoney(){

  const [searchParams] = useSearchParams()
  const toUserId = searchParams.id 
  const toUserName = searchParams.name
  const [amount, setAmount] = useState(0)
  const navigate = useNavigate()

  const handleClick = ()=>{
    console.log("initiating transfer")
    console.log(localStorage.getItem("token"))
    const token = localStorage.getItem("token")

    axios.post(`${ DB_URL}/api/v1/account/transfer`,{
      toAccount : toUserId,
      transferAmount : amount
    }, {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then((response)=>{
      console.log("the response from sending money is", response)
      navigate('/dashboard')
    })
    .catch((error)=>{
      console.log("the error is", error)
    })
  }

  return <div>
    <h1>Send Money</h1>
    <h1>{toUserName}</h1>
    <InputBox onChange={e=>setAmount(e.target.value)} inputLabel={"Amount(in Rs)"} inputPlaceholder={"Enter Amount"} inputType={"text"}></InputBox>
    <Button buttonName={"Initiate Transfer"} onClick={handleClick} ></Button>
  </div>
}