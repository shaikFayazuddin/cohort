import { useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useEffect } from "react";
import { DB_URL } from "../config";
import axios from "axios";

export function Users({}){

  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(()=>{
    axios.get(`${DB_URL}/api/v1/user/bulk?filter=${filter}`).then(response=>setUsers(response.data.users))
  },[filter])

  return <div>
    <InputBox onChange={e=>setFilter(e.target.value)} inputLabel={"Users"} inputPlaceholder={"Search Users"} inputType={"text"}></InputBox>

    <div>
      {users.map(user=><User user={user}/>)}
    </div>
    
    
  </div>
}

function User({user}){
  
  const handleClick = ()=>{
    console.log("user trying to send money")
  }
  return <div>

    <div>
      {user.firstName} {user.lastName}
    </div>

    <Button buttonName={"Send Money"} onClick={handleClick}></Button>
  </div>
}