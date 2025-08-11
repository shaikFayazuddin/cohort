import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import {Users} from "../components/Users"

export function Dashboard(){
  const userName = "John"
  const userBalance = 34982

  return <div>
    <AppBar appTitle={"PayTm app"} userName={userName}></AppBar>

    <Balance userBalance={userBalance}></Balance>

    <Users></Users>

  </div>
}