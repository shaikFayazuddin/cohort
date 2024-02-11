import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  return (
    <>
      <Count county={count} setCount={setCount}/>
    </>
  )
}

function Count({county ,setCount}){

  return <div>
    Present Count is {county}
    <Buttons countyy={county} setCount={setCount}/>
    {/* here the button is the child component of count and count is the child of app. Though the count component doesn't need setCount, still we are passing it to it, because it's child component button requires it and when the codebase get's bigger, it gets unable to understand the state and to make reading code easy, we use context API and this has nothing to do with re-rendering */}
    {/* also the parent component might have another components which are using the same state as the buttons component and that's the reason, the state in not declared in the button component rather in the parent component which is the Least Commom Ancestor */}
    {/* Context API will teleport the state to the child without using intermediate child */}
  </div>
}

function Buttons({countyy, setCount}){
  return <div>
    <button onClick={()=>{
      setCount(countyy+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(countyy-1)
    }}>Decrease</button>
  </div>
}

export default App
