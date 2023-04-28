import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
    //DOM Ref
    //useRef To storing Previous Satate
    //hold  mutable value prevent re-render of Component 
  const [name, setName] = useState("");
  const [counter,setCounter]=useState(0);
  const inputRef=useRef("");
  const numberRef=useRef("");

  useEffect(()=>{
    numberRef.current=counter
  },[counter])
  const resetButton=()=>{
    setName("")
    inputRef.current.focus()
  }
  return (
    <div>
      <input
      ref={inputRef}
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={resetButton}>Reset</button>
      <h4>my Name is {name}</h4>
      <h1>Counter Number: {counter}</h1>
      {typeof numberRef.current !== "undefined"&&(<h1> numberRef.current: {numberRef.current}</h1>) }
      <button onClick={()=>setCounter(Math.ceil(Math.random()* 100))}>Random Number </button>
    </div>
  );
};

export default UseRef;
