import { Button } from "./Button";
import { InputBox } from "./InputBox";

export function Users({}){

  const handleClick = ()=>{
    console.log("user wants to send money")
  }

  return <div>
    <InputBox inputLabel={"Users"} inputPlaceholder={"Search Users"} inputType={"text"}></InputBox>

    <Button buttonName={"Send Money"} onClick={handleClick}></Button>
  </div>
}