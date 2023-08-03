import React, { useEffect, useState } from "react";

const HooksMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [toggle,setToggle]=useState(true)
  const logMouseEvent = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("UseEffect Called....");
    window.addEventListener("mousemove", logMouseEvent);
    return ()=>{
        window.removeEventListener("mousemove", logMouseEvent)
    }
  },[]);

  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>toggle Btn </button>
        {toggle && ` HooksMouse X- {x} , Y-{y}`}
     
    </div>
  );
};

export default HooksMouse;
