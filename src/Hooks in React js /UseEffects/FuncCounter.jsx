import React, { useState, useEffect } from "react";

const FuncCounter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  },[count]);
  const onClickHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onClickHandler} />

      <button onClick={() => setCount(count + 1)}>
        Clicked Function Counter{count} times
      </button>
    </div>
  );
};

export default FuncCounter;
