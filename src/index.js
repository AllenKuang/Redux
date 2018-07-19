import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import counter from './reducers'
import {increment,multiplytwo} from './actions'
const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        onIncrement={() => store.dispatch(increment())}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        //onMultiply={(inputmultiple) => store.dispatch({ type: 'MULTIPLY',multiple:inputmultiple })}
        onMultiply={(inputmultiple) => store.dispatch(multiplytwo(inputmultiple))}
    />,
    rootEl
)

render()
store.subscribe(render)