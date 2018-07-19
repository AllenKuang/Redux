import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
class App extends Component {

  constructor(props) {
    super(props);
    //this.inputtext=React.createRef();
  }

  // mutiple=()=>{
  //   const inputtext=this.inputtext.current.value//this.refs.inputtext.value;
  //   //const settimes=3;
  //   const onMultiply=this.props.onMultiply;
  //   onMultiply(inputtext);
  //   //onMultiply(settimes);
  // }

  render() {
    const { state, onIncrement, onDecrement ,onMultiply} = this.props;
    return (
      <div className="App">
        <CounterGroup state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply} />
        <Counter state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply}/>
        {/* <p>
          Clicked: {state} times
        {' '}
          <button onClick={onIncrement}>
            +
          </button>
          <button onClick={onDecrement}>
            -
          </button>
          <input type="text" ref={this.inputtext} />
          <button onClick={this.mutiple}>
            x
          </button>
        </p > */}
      </div>
    );
  }
}

export default App;