import { useState } from 'react'
import { countContext } from './components/context'
import './App.css'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <countContext.Provider value={count}>
      <Count count={count} setCount={setCount}/>
    </countContext.Provider>
      
    </>
  )
}

function Count({setCount}){
  console.log("count re-rendered")
  // though the count is not using the count state, it still gets rendered.so it doesn't fix re-rendering and it only fix prop drilling
  //this is the drawback of context API
  //to overcome this we use stateManagement library called recoil, redux and zustand`
  return <div>
    <CountRender/>
    <Buttons setCount={setCount}/>
  </div>
}

function CountRender(){
  const count = useContext(countContext)
  return <div>
    Present count is {count}
  </div>
}

function Buttons({setCount}){
  const count = useContext(countContext)
  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count-1)
    }}>Decrease</button>
  </div>
}

export default App
