/*a todo app  that takes an todo id as an input and fetches the data for the that todo from the the given endpoint and then renders it
How would the depdency array change?
*/

import { useState } from 'react'
import axios  from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [selectedId,setSelectedId] = useState(1)
  /*
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function(res) { 
        setTodos(res.data.todos)
      })
  },[])
  */


  return (
    <>
    {/*
      {todos.map(todo => <Todo todoTitle={todo.title} todoDescription={todo.description}/>)}
    */}
    <button onClick={function(){
      setSelectedId(1)
    }}>1</button>

    <button onClick={function(){
          setSelectedId(2)
        }}>2</button>

    <button onClick={function(){
          setSelectedId(3)
        }}>3</button>

    <button onClick={function(){
              setSelectedId(4)
            }}>4</button>    

    
    <Todo id={selectedId}/>
    </>
  )
}

// function Todo({todoTitle,todoDescription}){
function Todo({id}){
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function(res){
      setTodos(res.data.todo)
    }
    )
  },[id])
  
  return <div>
    {/*
    <h1>
      {todoTitle}
    </h1>
    <h3>
    {todoDescription}
    </h3>
    */}
    Id:{id}
    <h1>
      {todos.title}
    </h1>
    <h3>
    {todos.description}
    </h3>
    
    
  </div>
}

export default App
