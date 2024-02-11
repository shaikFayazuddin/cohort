import './App.css'
import {RecoilRoot} from 'recoil'
import {useRecoilState,useRecoilValue} from 'recoil'
import { notification, totalNotificationSelector} from './atom'
import { useEffect } from 'react'
import { axios} from 'react'


function App() {

  return (
    <>
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
    </>  )
}

function MainApp(){
  const [notificationCount, setNotificationCount] = useRecoilState(notification)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  useEffect(() =>{
     axios.fetch("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNotificationCount(res.data)
      })
  },[])

  return <div>
    <button>Home</button>

    <button>My Network ({notificationCount.network})</button>
    <button>Jobs ({notificationCount.jobs})</button>
    <button>Messages ({notificationCount.messaging})</button>
    <button>Notifications ({notificationCount.notifications})</button>

    <button>Me ({totalNotificationCount})</button>
  </div>
}
export default App
