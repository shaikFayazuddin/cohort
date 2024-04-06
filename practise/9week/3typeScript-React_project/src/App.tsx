import './App.css'

function App() {

  return (
    <>
     <Todo title={'To run'} description={'Start running'}></Todo>
    </>
  )
}

interface TodoProp{
  title : string,
  description : string
}

function Todo(props : TodoProp){
  return <div>
     <div>
    <h1>{props.title}</h1>
  </div>

  <div>
    <h2>{props.description}</h2>
  </div>
  </div>

}

export default App
