import React, { useState } from "react";
import useCounter from "./useCounter";

function Counter1() {
    const [count,increment,decrement,reset]=useCounter(1,2)

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter1;
