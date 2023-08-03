import React,{useState,useRef,useEffect} from 'react'

const UseRefWithState = () => {
  const[count,setCount]= useState(0);
  const  countRef=useRef();

  useEffect(()=>{
    countRef.current=count
  },[count])
  const PreVCount=countRef.current;
  return (
    <div>
      count:{count}
      PreVCount:{PreVCount}
      <button type="button" onClick={()=>{setCount(count+1)}}> Click me</button>
    </div>
  )
}

export default UseRefWithState;