import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil"
import { countAtom } from "./store/atoms/count"

function App() {
  return (
    <>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </>
  )
}

function Count(){
  return <div>
    <CountRender/>
    <Buttons/>
    <OddEven/>
  </div>
}

function CountRender(){
  const count = useRecoilValue(countAtom)
  return <div>
    Present counter value is {count}
    </div>
  }

function Buttons(){
  // const [count,setCount] = useRecoilState(countAtom)
  // console.log("button re-renders")
  // due to the above syntax, the buttons also get re-renders,even though there is no change in the buttons.
  // as only the count is getting updated, we can avoid button re-rendering
  // this can be using useSetRecoilSate
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count => count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count-1)
    }}>Decrease</button>
  </div>
}

function OddEven(){
  // const count = useRecoilValue(countAtom)
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {/* {(count%2==0)?"It is Even" : "It is Odd"} */}
    {/* the above logic will give use the desired output, but not advised to use as the odd/eve value is directly dependent on the count state */}
    {/* so we use Selector in recoil which is similar to useMemo in react */}

    {isEven ? "It is Even" : "It is Odd"}
  </div>
}
export default App
