import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos] = useState([{
    title : "Go to Gym",
    description : "Go to Gym from 6-8",
    completed:false
  },{
    title : "Go to College",
    description : "Go to Gym from 9-4",
    completed:false
  },{
    title : "Go to Home",
    description : "Reach Home and Relax",
    completed:false
  }
])

  function addTodo(){
    setTodos([...todos,{
      title:"New Todo",
      description:"Desc of New Todo"
    }])
  }
  return (
    <div>
      <button onClick = {addTodo} >Add a Random Todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}
export default App
