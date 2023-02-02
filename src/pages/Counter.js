import React,{useState} from "react";

const Counter = () =>{
    const [num,setNumber]=useState(0);
    //const num=0와 같은 정의 num을 set할 수 있는 setNumber
    const increase =() =>{
        setNumber(num+1);
        //num+=1
    }   
    const decrease= () =>{
        setNumber(num-1);
    }
    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    );
    
};
export default Counter