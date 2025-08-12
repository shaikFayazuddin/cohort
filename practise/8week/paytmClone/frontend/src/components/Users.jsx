import { useState } from "react";
import { Button } from "./Button";
import { InputBox } from "./InputBox";
import { useEffect } from "react";
import { DB_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";

export function Users({}){

  const [paytmUsers, setPaytmUsers] = useState([])
  const [filter, setFilter] = useState("")

  // useEffect(()=>{
  //   axios.get(`${DB_URL}/api/v1/user/bulk?filter=${filter}`).then(response=>setUsers(response.data.users))
  // },[filter])

  useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setPaytmUsers(response.data.users)
            })
    }, [filter])
  console.log("the fetched users are", paytmUsers)
  return <div>
    <InputBox onChange={e=>setFilter(e.target.value)} inputLabel={"Users"} inputPlaceholder={"Search Users"} inputType={"text"}></InputBox>

    <div>
      {paytmUsers.length>0 ? paytmUsers.map(user=><SingleUser key={user._id} user={user}/>) : null }
    </div>
    
    
  </div>
}

function SingleUser({user}){
  const navigate = useNavigate()
  return <div>

    <div>
      {user.firstName} {user.lastName}
    </div>

    <Button buttonName={"Send Money"} onClick={(e)=>{
      navigate(`/send?id=${user._id}&name=${user.firstName}`)
    }}></Button>
  </div>
}