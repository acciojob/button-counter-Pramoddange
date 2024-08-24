import React,{ Component } from "react";

class Counter extends Component {
constructor(props){
    super(props);
    this.state={counter:0}
}

render(){
    incerementCount=()=>{
        const cont=this.state.counter;
       this.setSate({counter:cont+1});
    }
    return (
        <>
        <p>Button clicked {this.state.counter} times</p>
        <button onClick={this.incerementCount}>Click me</button>
        </>
    );
}
}

export default Counter;