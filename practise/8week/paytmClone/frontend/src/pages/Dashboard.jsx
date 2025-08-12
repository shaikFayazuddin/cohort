import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import {Users} from "../components/Users"
import { DB_URL } from "../config";
import { useState } from "react";
import axios from "axios";

export function Dashboard(){
  const [userName, setUserName] = useState("Paytm User")
  const [userBalance, setUserBalance] = useState(0)

  const token = localStorage.getItem("token")
  // console.log('the token from dashboard is', token)
  useEffect(()=>{
    axios.get(`${DB_URL}/api/v1/account/balance`,{
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then((response)=>{
      // console.log(response)
      setUserBalance(response.data.Balance)
    })
    .catch((error)=>{
      alert(error.response.data.msg)
      // console.log("error in fetching the balance", error)
    })
  },[])
  // console.log("the user balance is", userBalance)
  return <div className="flex items-center justify-center h-screen bg-black">
      <div className="border-2 border-black-500  bg-gray-950 text-white rounded-lg shadow-md flex flex-col justify-evenly items-center w-120 h-180 ">
    <AppBar appTitle={"PayTm app"} userName={userName}></AppBar>

    <Balance userBalance={userBalance}></Balance>

    <Users></Users>

  </div>
  </div>
}