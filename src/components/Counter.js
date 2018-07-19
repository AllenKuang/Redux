import React, { Component } from 'react';

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.inputtext=React.createRef();
      }

      mutiple=()=>{
        const inputtext=this.inputtext.current.value//this.refs.inputtext.value;
        const onMultiply=this.props.onMultiply;
        onMultiply(this.props.index,inputtext);
      }
    render(){
        const { value, onIncrement, onDecrement ,delayIncrement,index} = this.props;
        return <p>
          Clicked: {value} times
        {' '}
          <button onClick={()=>onIncrement(index)}>
            +
          </button>
          <button onClick={()=>onDecrement(index)}>
            -
          </button>
          <input defaultValue={0} type="text" ref={this.inputtext} />
          <button onClick={this.mutiple}>
            x
          </button>
          <button onClick={()=>setTimeout(()=>delayIncrement(index),1000)}>
            Increment Async
          </button>
        </p >
        }
}