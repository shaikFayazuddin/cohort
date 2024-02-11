import {BrowserRouter,Routes, Route, useNavigate} from "react-router-dom"
import React from "react" 
import './App.css'
import { Suspense } from "react"
// import { Dashboard } from './components/dashboard'
const Dashboard = React.lazy(()=> import('./components/dashboard'))
// import {Landing} from './components/landing'
const Landing = React.lazy(()=> import('./components/landing'))
// import { Suspense } from "react"


function App() {

  return (
    <div>
      <div>
        <h1>Finkedin</h1>

        {/* <button onClick={()=>{
          window.location.href = '/'
        }}>Landing</button>

        <button onClick={()=>{
          window.location.href = '/dashboard'
        }}>Dashboard</button> */}

        {/* The above method is not good as whenever the button is cliked, it again fetch the new code which is not the objective, so to avoind we use useNavigate hook */}

        {/* <button onClick={()=>{
          navigate('/')
        }}>Click to Navigate to Landing Page</button>
        <button onClick={()=>{
          navigate('dashboard')
        }}>Click to Navigate to Dashboard Page</button> */}
        {/* the above will not work as the useNavigate needs to be inside the BrowserRouter, so we need to create a new component which will be constand in all the pages */}
        
      </div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
            <Route path='/dashboard' element={<Suspense fallback={<div>Loading....</div>}><Dashboard/></Suspense> }/>
            <Route path='/' element={<Suspense fallback={<div>Loading....</div>}><Landing/></Suspense> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate()

  return <div>
     <button onClick={()=>{
          navigate('/')
        }}>Click to Navigate to Landing Page</button>
        <button onClick={()=>{
          navigate('dashboard')
        }}>Click to Navigate to Dashboard Page</button>
  </div>
}

export default App
