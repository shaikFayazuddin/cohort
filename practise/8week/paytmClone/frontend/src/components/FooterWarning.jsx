export function FooterWarning({warning, ref, anchorText}){
  return <div>
    <p>{warning}</p><a href={ref} className="underline block">{anchorText}</a>
  </div>
}