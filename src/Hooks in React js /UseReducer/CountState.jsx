import { useState } from "react";
const CountState = () => {
    const [count,setCount]=useState(0);

    const handleClick=(e)=>{
      setCount(parseInt(e.target.value))
      console.log("value>>>",)
    }
console.log("count>>",count)
  return (
    <div>
        <h1>{count}</h1>
        <input type="number" onChange={handleClick}/>
        <button onClick={()=>setCount(count + 1)}>INCREMENT</button>
        <button onClick={()=>setCount(count -1 ) }>DECREMENT</button>

    </div>
  )
}

export default CountState