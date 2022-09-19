import { useState, useEffect, useRef } from "react";
function UseRefTEst() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

  const textInput = useRef(2);
 const  focusTextInput = () => textInput.current.focus();

 useEffect(()=>{
},[])
console.log(textInput.current)
 
  return (
    <>
      <div>
      <input type="text" defaultValue='helo' ref={textInput} />
      {/* <button onClick={focusTextInput}>Focus the text input</button> */}
      {console.log(textInput.current)}
      </div>
    </>
  );
}
export default UseRefTEst;
