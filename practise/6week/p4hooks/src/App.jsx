import { useEffect } from 'react'
import { useState } from 'react'
/*
Hooks : The functions that start with Use are called Hooks.
Hooks in react are functions that allow you to hook into react state and lifecycle features from funtion components.

Now to understand useEffect hook we will be creating an app that polls the sum server, gets the current set of TODOs and renders it on screen.
*/
function App() {
  const [todos,setTodos] = useState([])

  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async (res)=>{
          const data = await res.json()
        setTodos(data.todos)
      })
    },1000)
  },[])

  return <div>
      {todos.map(todo=> <Todo key={todo.id} todoTitle={todo.title} todoDescription={todo.description}/>)}
    </div>

}

function Todo({todoTitle,todoDescription}){
  return <div>
    <h1>
      {todoTitle}
    </h1>
    <h3>
      {todoDescription}
    </h3>
  </div>
}

export default App
