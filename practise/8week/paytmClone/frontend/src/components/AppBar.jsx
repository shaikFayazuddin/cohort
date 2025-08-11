export function AppBar({appTitle, userName}){
  return <div>
    <div>{appTitle}</div>
    <div>
      <div>{"Hello " + userName}</div>
    </div>
  </div>
}