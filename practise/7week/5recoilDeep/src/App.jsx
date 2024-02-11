import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, networkAtom,notificationAtom, messageAtom, totalNotificationSelector } from './atom'

function App() {

  return (
    <>
    <RecoilRoot>
      <MyApp/>
    </RecoilRoot>
    </>
  )
}

function MyApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsNotificationCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const messageNotificationCount = useRecoilValue(messageAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return <div>

    <button>Home</button>
    <button>My network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobsNotificationCount >=100 ? "99+" : jobsNotificationCount})</button>
    <button>Notification ({notificationCount >=100 ? "99+" : notificationCount})</button>
    <button>Messages ({messageNotificationCount >=100 ? "99+" : messageNotificationCount})</button>
    <button>Me ({ totalNotificationCount })</button>
  </div>
}

export default App
