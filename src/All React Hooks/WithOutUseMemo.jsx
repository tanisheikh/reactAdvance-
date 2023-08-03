import React, { useState } from "react";

const WithOutUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const counterNumber = counterNumberFun(number);

  const inputChangeFun = (e) => {
    setNumber(e.target.value);
  };
  const counterButton = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
        <h1>number :{number}</h1>
        <h1>counter:{counter}</h1>

      <input
        type="text"
        value={number}
        placeholder="Enter Your Number"
        onChange={inputChangeFun}
      />
      <button type="button" onClick={counterButton}>
        Click me
      </button> 
      <div>OUTPUT: {counterNumber}</div>

    </div>
  );
};
const counterNumberFun= (number)=>{
    console.log("counterNumberFun>>>")
return Math.pow(number, 2);
}

export default WithOutUseMemo;
