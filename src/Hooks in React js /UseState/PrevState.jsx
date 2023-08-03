import React, { useState } from "react";

const PrevState = () => {
  const initialState = 0;
  const [count, setCount] = useState(initialState);
  const resetCount = () => {
    setCount(initialState);
  };
  const incremnet = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Count>>",count)
  };
  const decremnet = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incremnet5 = () => {
    for (let i = 0; i < 5; i++) {
    //   setInterval(() => { 
    //     setCount((prevCount) => prevCount + 1);
    //   }, 2000);
          setCount((prevCount) => prevCount + 1);
          console.log("Count2>>",count)


    }
  };
  return (
    <div>
      count:{count}
      <button onClick={resetCount}>Reset</button>
      <button onClick={incremnet}>Increment</button>
      <button onClick={decremnet}>Decremnet</button>
      <button onClick={incremnet5}>Increment5</button>
    </div>
  );
};

export default PrevState;
