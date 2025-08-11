export function Button({buttonName, onClick}){
  return <button onClick={onClick} type="button">{buttonName}</button>
}