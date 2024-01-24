import { useState } from "react"
export default function App(){

  const [newItem, setnewItem]=useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(()=>{
      return [
        ...todos,
        { id : crypto.randomUUID(),
        title: newItem,
        completed: false}
      ]
    })

    setnewItem("")
  }

  function toggleTodo(id,completed){
    setTodos(todos => {
      return todos.map(todo => {
        if(todo.id == id){
          return { ...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(todos=>{
      return todos.filter(todo => todo.id != id)
    })
  }

  return(
    <div>
      <form action="" onSubmit={handleSubmit}>

        <div>
          <label htmlFor="item">New Item</label> <br />
          <input value={newItem} onChange={e=>setnewItem(e.target.value)} type="text" id="item" /> 
        </div> <br />

      <button>Add</button>

      <h1>ToDo List</h1>

      <ul>
        {todos.length === 0 && "No ToDos"}
        {todos.map(todo =>{
          return <li key={todo.id}>
          <label htmlFor="">
            <input type="Checkbox" checked={todo.completed}
            onChange={e=>toggleTodo(todo.id,e.target.checked)}/>
            {todo.title}
          </label> <br />
          <button onClick={()=>deleteTodo(todo.id)} >Delete</button>
        </li>
        })}
      </ul>

    </form>
  </div>
    
  ) 
}