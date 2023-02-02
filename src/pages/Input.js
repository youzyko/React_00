import React,{useState} from "react";
const Input = () =>{
    const [txtValue,setTextValue]=useState("");
    
    const onChange = (e) =>{
        setTextValue(e.target.value) //input 타입의 value 값
    }   
    return(
        <div>
            <input type="text" value={txtValue} onChange={onChange}></input>
            <br></br>
            <p>{txtValue}</p>
        </div>
    );
    
};
export default Input;