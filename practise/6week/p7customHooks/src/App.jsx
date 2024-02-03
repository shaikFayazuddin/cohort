import { useState, useEffect } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useTodos(){
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=1")
    .then(function(res){
      setTodos(res.data.todos)
    })
  },[])
  return todos
}
//demo of custom hooks

function App() {
  const todos = useTodos()
  return (
    <>
      {todos}
    </>
  )
}


export default App
