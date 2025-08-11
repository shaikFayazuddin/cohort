import { Button } from "../components/Button";
import { InputBox } from "../components/InputBox";

export function SendMoney(){
  const handleClick = ()=>{
    console.log("initiating transfer")
  }
  return <div>
    <h1>Send Money</h1>
    <h1>Friend's Name</h1>
    <InputBox inputLabel={"Amount(in Rs)"} inputPlaceholder={"Enter Amount"} inputType={"text"}></InputBox>
    <Button buttonName={"Initiate Transfer"} onClick={handleClick} ></Button>
  </div>
}