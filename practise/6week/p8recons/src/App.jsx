import {useState} from "react"

function App(){
  const [count, setCount] = useState(0)

  return <div>
    <button onClick={function(){
      setCount(count+1)
    }}>Count is {count}</button>
  </div>
}

export default App
