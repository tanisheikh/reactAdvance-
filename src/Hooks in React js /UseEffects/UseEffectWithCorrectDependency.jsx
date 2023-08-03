import React, { useEffect, useState } from "react";

const UseEffectWithCorrectDependency = () => {
  const [count, setCount] = useState(0);
  const tick = () => {
    // setCount(count +1);
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
};

export default UseEffectWithCorrectDependency;
