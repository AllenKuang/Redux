import React, { Component } from 'react';
import Counter from './Counter'

export default class extends Component{
    render(){
        const { state, onIncrement, onDecrement ,onMultiply,amount} = this.props;
        let group=[];
        for(let i=0;i<amount;i++){
            group.push(<Counter index={i} key={i} state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply}/>)
        }
        return <div>
            {group}
        </div>
    }
} 