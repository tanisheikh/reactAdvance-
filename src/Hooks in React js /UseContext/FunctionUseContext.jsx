import React,{useContext} from 'react';
import {CounterContext} from './CounterContext.jsx'

function FunctionUseContext(props) {
    const counter=props.counter;
    const counterContext=useContext(CounterContext)
  return (
    <div>
        <h1>CUseContext</h1>
        <h1>{counter}</h1>
    <h1>{counterContext}</h1></div>
  )
}

export default FunctionUseContext;