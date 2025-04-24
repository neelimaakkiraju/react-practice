import { useRef,useState } from "react";

function DebounceInput(){
    const [value,setValue] = useState(null)
    const timeOutRef = useRef(null)
}
function InputFun(){
    const handleChange = (e)=>{
        const newValue = e.target.value
    }
    const inputRef = useRef(null)
    const handleClick = ()=>{
        inputRef.current.focus();
    }
    return(
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={handleClick}>focus Input</button>
        </div>
    )

    
}

export default InputFun