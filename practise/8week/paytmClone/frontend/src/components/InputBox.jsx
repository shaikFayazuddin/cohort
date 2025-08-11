export function InputBox({inputLabel, inputPlaceholder, inputType, onChange}){
  return <label>
    {inputLabel}
    <input type={inputType} placeholder={inputPlaceholder} onChange={onChange} />
  </label>
}