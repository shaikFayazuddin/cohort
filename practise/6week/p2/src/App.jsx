import React, { useState, Fragment} from 'react'

function App() {

  const [todos, setTodos] = useState([{
    id:1,
    title: "Eat BF",
    description:"Eat BF at home"
  },{
    id:2,
    title: "Eat lunch",
    description:"Eat lunch at home"
  },{
    id:3,
    title: "Eat Dinner",
    description:"Eat Dinner at home"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title:Math.random(),
      description:Math.random()
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(function(todo){
        return <Todo key={todo.id} todoTitle={todo.title} todoDescription={todo.description}></Todo>
      })}
    </div>
  )
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
/*
  function Todo(props){
    return <div>
      <h1>
        {props.todoTitle}
      </h1>
      <h3>
        {props.todoDescription}
      </h3>
    </div>
  }
*/


export default App
