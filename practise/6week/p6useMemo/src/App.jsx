/*
Demo of useMemo
*/
/*the issue is whenever the button component is re-rendered, it also re-renders the full app component which means, the for loop will run again , which is expenseive operation, to avoid this first we used the useEffect and then useMemo*/
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [inputvalue, setInputValue] = useState(1)
  //const [finalsum, setFinalSum] = useState()
 
  /*
  //this will cause unnecessary re-renders and to avoid this we use useMemo whose syntac is very close to useEffect

  useEffect(()=>{
    let sum = 0
  for(let i=1;i<=inputvalue;i++){
    sum = sum+i
  }
  setFinalSum(sum)
  },[inputvalue])

  */

  let finalSum = useMemo(()=>{
    let sum = 0
    for(let i=1;i<=inputvalue;i++){
      sum = sum+i
    }
    return sum
  },[inputvalue])


  return (
    <>
      <div>
        <input type="text" onChange={(e)=>{
          setInputValue(e.target.value)
        }}  placeholder='Find sum from 1 to n'/> <br />

        <div>Sum from 1 to {inputvalue} is {finalSum}</div> <br />

        <button onClick={()=>{
          setCounter(counter+1)
        }}>Counter {counter}</button>

      </div>
    </>
  )
}

export default App
