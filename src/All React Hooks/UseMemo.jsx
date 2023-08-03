import React, { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const inputNumbervalue = useMemo(() => {
    return counterNumberFun(number);
  }, [number]);

  console.log("inputNumbervalue>>", inputNumbervalue);
  const inputChangeFun = (e) => {
    setNumber(e.target.value);
  };
  const counterHander = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>outPut: {inputNumbervalue}</h1>
      <h1>Counter: {count}</h1>

      <input
        type="text"
        placeholder="Enter your Number"
        onChange={inputChangeFun}
      />
      <button type="button" onClick={counterHander}>
        Counter button
      </button>
    </div>
  );
};

const counterNumberFun = (number) => {
  console.log("counterNumberFun called >>>");
  return Math.pow(number, 2);
};

export default UseMemo;
