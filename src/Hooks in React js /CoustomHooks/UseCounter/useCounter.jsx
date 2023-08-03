import React,{useState}from 'react'

const useCounter = (initialState=0,value) => {
    
    const [count, setCount] = useState(initialState);

    const increment = () => {
      setCount((preCount) => preCount + value);
    };
    const decrement = () => {
      setCount((preCount) => preCount - value);
    };
    const reset = () => {
      setCount(initialState);
    };
  
  return  [count,increment,decrement,reset]
}

export default useCounter