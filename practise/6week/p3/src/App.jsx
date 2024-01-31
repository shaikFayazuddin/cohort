function App() {
  return (
    <>
      <CardWrapper>
        <TextComponent/>
      </CardWrapper>

      <CardWrapper>
        <BodyComponent/>
      </CardWrapper>
    </>
  )
}

function CardWrapper({children}){
  return <div style={{border:"5px solid black", padding:"20px", margin:10}}>
    {children}
  </div>
}

function TextComponent(){
  return <div>
    Hi There
  </div>
}

function BodyComponent(){
  return <div>
    How are you doing?
  </div>
}

export default App
