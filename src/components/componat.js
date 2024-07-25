import React,{ Componet } from "react";

class Counter extend Componet{
constructor(props){
    super(props);
    this.state={counter:0}
}
incerementCount=()=>{
    const cont=this.state.counter;
   this.setSate({counter:cont+1});
render(){
    return (
        <>
        <p>Button clicked {this.state.counter} times</p>
        <button onClick={this.incerementCount}>Click me</button>
        </>
    )
}
}
export default Counter;