import React,{ useState } from "react";

const Counter=()=>{
const[counter,setCount]=useState(0);
const incerementCount=()=>{
   
   setCount(counter+1);
}

    return (
        <>
        <p>Button clicked {counter} times</p>
        <button onClick={incerementCount}>Click me</button>
        </>
    )
}


export default Counter;