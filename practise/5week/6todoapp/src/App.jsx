import { useState } from "react"
export default function App(){

  const [newItem, setnewItem]=useState("")

  return(
    <div>
      <form action="">

        <div>
          <label htmlFor="item">New Item</label> <br />
          <input value={newItem} onChange={e=>setnewItem(e.target.value)} type="text" id="item" /> 
        </div> <br />

      <button>Add</button>

      <h1>ToDo List</h1>

      <ul>
        <li>
          <label htmlFor="">
            <input type="Checkbox" />
            Item 1
          </label> <br />
          <button>Delete</button>
        </li>
      </ul>

    </form>
  </div>
    
  ) 
}