import React, { useState, useCallback } from "react";
const funccount = new Set();

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCountBtn = useCallback(() => {
    console.log("IncrementCountBtn called");
    setCount(count + 1);
  },[count]);
  const decremnetCountBtn = useCallback(() => {
    setCount(count - 1);
  },[count]);
  const incrementNumberBtn = useCallback(() => {
    console.log("IncrementNumberBtn called");

    setNumber(number + 1);
  },[number]);
  funccount.add(incrementCountBtn);
  funccount.add(decremnetCountBtn);
  funccount.add(incrementNumberBtn);
  alert(funccount.size);
  return (
    <div>
      {count}
      <button type="button" onClick={incrementCountBtn}>
        Increment Count
      </button>
      <button type="button" onClick={decremnetCountBtn}>
        Decremnet Count
      </button>
      {number}
      <button type="button" onClick={incrementNumberBtn}>
        Increment Number
      </button>
    </div>
  );
};

export default UseCallBack;
