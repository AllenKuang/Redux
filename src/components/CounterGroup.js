import React, { Component } from 'react';
import Counter from "../containers/CounterContainer";

export default class extends Component{
    render(){
        const {amount} = this.props;
        let group=[];
        for(let i=0;i<amount;i++){
            group.push(<Counter index={i} key={i}/>)
        }
        return <div className="App">
            {group}
        </div>
    }
} 