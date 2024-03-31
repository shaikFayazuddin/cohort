import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// disable react strict mode
function App() {
  const [render, setRender] = useState(true)

  useEffect(()=>{
    setInterval(()=>{
      setRender(r=>!r)
    },10000)
  },[])
  

  return (
    <>
      {render ? <MyComponent/> : <div></div>}
    
    </>
  )
}

function MyComponent(){

  useEffect(()=>{
    console.log("Component Mounted")

    return () =>{
      console.log("Component unMounted")
    }
  },[])

  return <div>
    From inside the MyComponent
  </div>
}

export default App
