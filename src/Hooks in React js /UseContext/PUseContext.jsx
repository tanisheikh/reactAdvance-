import React, { useState } from "react";
import FunctionUseContext from './FunctionUseContext';
import ClassUseContext from './ClassUseContext';
import {CounterContext} from './CounterContext'
const PUseContext = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>{counter}</p>
      <button onClick={incrementCounter}>increment</button>
      <button  onClick={decrementCounter}>decrement</button>
      <hr/>
      <CounterContext.Provider value={counter}>
      <FunctionUseContext />
      <hr/>
      <ClassUseContext />
      </CounterContext.Provider>

    </div>
  );
};

export default PUseContext;
