import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterGroup from './components/CounterGroup';
class App extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { state, onIncrement, onDecrement ,onMultiply} = this.props;
    return (
      <div className="App" >
        <CounterGroup state={state} onIncrement={onIncrement} onDecrement={onDecrement} onMultiply={onMultiply} amount={3} />
      </div>
    );
  }
}

export default App;