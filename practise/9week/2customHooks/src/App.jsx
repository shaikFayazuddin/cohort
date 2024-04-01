import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


/*
function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos)
      })
  },[])

  return (
    <>
    {todos.map(todo =><Task todo={todo}/>)}
    </>
  )
}
*/

//now creating an custom hook to fetch the data

function useTodo(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    
    const value = setInterval(()=>{
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res=>{
        setTodos(res.data.todos)
        setLoading(false)
      })
    },n*1000)
    
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(res=>{
      setTodos(res.data.todos)
      setLoading(false)
    })

    return ()=>{
      clearInterval(value)
    }
    },[n])

  return {todos,loading}
  
}

// creating a userIsOnline custom hook

function useIsUserOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine)

  useEffect(()=>{
    window.addEventListener("online", ()=>setIsOnline(true))
    window.addEventListener("offline",()=>setIsOnline(false))
  },[])
  
  return isOnline
}

//creating mouse position customHook

function useMousePointer(){
  const [mousePosition, setMousePosition] = useState({x:0,y:0})

  const handleMouseMove = (e)=>{
    setMousePosition({x:e.clientX, y:e.clientY})
  }
  useEffect(()=>{
    window.addEventListener("mousemove",handleMouseMove )

    return ()=>{
      window.removeEventListener("mousemove", handleMouseMove)
    }
  },[])

  return mousePosition
}

//now creating a timer using custom hook
function useInterval(callback, delay){
  useEffect(()=>{
    const intervalId = setInterval(callback,delay)
    
    return ()=>clearInterval(intervalId)
  },[callback, delay])
}

//creating debounce using cutom hook
function useDebounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setDebouncedValue(value)
    }, delay)

    return clearInterval(timerId)
  },[value, delay])

  return debouncedValue
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////


function App(){
  const {todos, loading} = useTodo(500)
  const isOnline = useIsUserOnline()
  const mousePosition = useMousePointer()

  //code for timer ////////////////////
  const [count, setCount] = useState(0)

  useInterval(()=>{
    setCount(c=>c+1)
  },100)
/////////////////////////

//state for debouncing
const [inputValue, setInputValue] = useState("")
const debouncedValue = useDebounce(inputValue,500)
/////////////////

/*
  if(loading){
    return <div>
      Loading..........
    </div>
  }

  return <div>
    {todos.map(todo => <Task todo={todo}/>)}
  </div>
*/
  return <div>
    {loading ? <div>Loading..........</div> : <div>
    {todos.map(todo => <Task todo={todo}/>)}
  </div>  }

  <br />
  <br />

  <div>
    {isOnline ? "User in Online" : "User is Offline"}
  </div>

  <br />
  <br />

  <div>
    Your mouse position is {mousePosition.x} {mousePosition.y}
  </div>

  <br />
  <br />

  <div>
    Timer is at {count}
  </div>

  <br />
  <br />

  <div>
  <input type="text"
    placeholder='Search......' 
    onChange={(e)=>setInputValue(e.target.value)}
    value={inputValue}/>
  </div>
    
  </div>


}

//todo component
function Task({todo}){
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App
