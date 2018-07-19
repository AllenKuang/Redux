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
        onIncrement={(index) => store.dispatch(increment(index))}
        onDecrement={(index) => store.dispatch({ type: 'DECREMENT' ,index})}
        onMultiply={(index,inputmultiple) => store.dispatch(multiplytwo(index,inputmultiple))}
    />,
    rootEl
)

render()
store.subscribe(render)