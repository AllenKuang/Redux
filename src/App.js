import React, { Component } from 'react';
import CounterGroup from './components/CounterGroup';
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App" >
        <CounterGroup amount={3} />
      </div>
    );
  }
}

export default App;