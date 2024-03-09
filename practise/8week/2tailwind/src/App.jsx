import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return (
    <>
      <div className='flex justify-between'>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-red-500'>Hello</div>
        <div className='bg-red-500'>Hello</div>
      </div>
      <div className='grid grid-cols-10'>
        <div className='bg-yellow-200 col-span-5'>Bye</div>
        <div className='bg-blue-100 col-span-3'>Bye</div>
        <div className='bg-red-100 col-span-2'>Bye</div>
      </div>
      <div className='bg-red-700 sm:bg-red-500 md:bg-green-500'>Don't make it small</div>
      <div className='grid grid-cols-9'>
        <div className='bg-red-500 col-span-9 md:col-span-3'>Unity</div>
        <div className='bg-blue-600 col-span-9 md:col-span-3'>and</div>
        <div className='bg-blue-300 col-span-9 md:col-span-3'>Discipline</div>
      </div>
      <div className='grid grid-cols-4'>
        <RevenueCard title={"Amount Pending"} amount={"9,87,65,432"} orderCount={6}></RevenueCard>
      </div>
      
    </>
  )
}

export default App
