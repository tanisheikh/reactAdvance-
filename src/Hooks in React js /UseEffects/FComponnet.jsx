import React, { useState, useEffect } from "react";

function FComponnet() {
  const date = new Date().toISOString();
  const initialMessage = "Functional Component";
  const [time, setTime] = useState(date);
  const [message, setMessage] = useState(initialMessage);
  useEffect(() => {
    const interval = setInterval(showDate, 1000);
    console.log("Component Mount And Updated");
    return () => {
      console.log("ClearUp of Interval");
      clearInterval(interval);
    };
  }, [time]);
  const showDate = () => {
    setTime(date);
  };
  return (
    <div>
      <div>{time}</div>
      <button onClick={showDate}> Show Date</button>
      <div>{message}</div>
      <button
        onClick={() => {
          setMessage("Functional Component Changed");
        }}
      >
        Change Message
      </button>
    </div>
  );
}

export default FComponnet;
