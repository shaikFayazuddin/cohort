import { set } from "mongoose"
import {useState} from "react"

function App() {
  return (
      <div>
        <HeaderWithButton></HeaderWithButton>
        <Header headerTitle="My last Name is Shaik"></Header>
      </div>
  )
}

function HeaderWithButton(){
  const [title, setTitle] = useState("My name is Fayazuddin")

  function updateTitle(){
    setTitle('My name is ' + Math.random())
  }
  return <div>
        <button onClick={updateTitle} >Click me to Change the title</button>
        <Header headerTitle={title}></Header>
      </div>
}


function Header(props){
  return <div>
    {props.headerTitle}
  </div>
}

{/*
Instead of the above solution, the Header component can be wrapped inside Memo.
Doing this will re-render the only child whose state is changed and not the other ones.
And also this will re-render the whole component but leaving the child components whose
state is not changed. 
*/}

{/*
const Header = React.memo(function Header(props){
  return <div>
    {props.headerTitle}
  </div>
})
*/}

export default App
