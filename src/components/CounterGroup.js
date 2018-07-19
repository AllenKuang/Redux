import React, { Component } from 'react';
import Counter from './Counter'

export default class extends Component{
    
    render(){
        const { state, onIncrement, onDecrement ,onMultiply} = this.props;
        return <div>
            <Counter state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply}/>
            <Counter state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply}/>
        </div>
    }
} 