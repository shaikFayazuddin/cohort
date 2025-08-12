import { Button } from "../components/Button"
import { FooterWarning } from "../components/FooterWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router"
import { useState } from "react"
import { DB_URL } from "../config"

export function Signin(){
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const titleName = "Signin"
  const subHeading = "Enter your information to sigin"
  const warningMessage = "New to PayTm, create an account"

  const handleSubmit = async()=>{
    // console.log("user is trying to sign in")
    // console.log(userName, password)

    await axios.post(`${DB_URL}/api/v1/user/signin`,{
      userName : userName,
      password : password
    })
    .then((response)=>{
      // console.log(response)
      localStorage.setItem("token", response.data.token)
      navigate("/dashboard")
    })
    .catch((error)=>{
      alert(error.response.data.msg)
      // console.log("the error is",error)
    })

    
  }
  return <div className="flex items-center justify-center h-screen bg-black">
    <div className="border-2 border-black-500  bg-gray-950 text-white rounded-lg shadow-md flex flex-col justify-evenly items-center w-120 h-180 ">
    <Heading headingTitle={titleName}></Heading>

    <SubHeading subHeadingTitle={subHeading}></SubHeading>

    <InputBox onChange={e=>setUserName(e.target.value)} inputLabel={"Username"} inputPlaceholder={"john@gmail.com"} inputType={"text"}></InputBox>

    <InputBox onChange={e=>setPassword(e.target.value)} inputLabel={"Password"} inputPlaceholder={"John#123"} inputType={"password"}></InputBox>

    <Button onClick={handleSubmit} buttonName={"Signin"}></Button>

    <FooterWarning warning={warningMessage} ref={"/signup"} anchorText={"Signup"}></FooterWarning>

  </div>
  </div>
}