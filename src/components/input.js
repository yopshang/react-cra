function Input({id,value, text, onChangeHandler}) {  
  return <>
  <label htmlFor={id}>{text}</label>
  <input  value={value} onChange={onChangeHandler} id={id} type="text"></input>
  </>
}
export default Input
