import React, { useState, useEffect } from "react";
// 1. Create an app, where a user can track the number of times they clicked a button
// on clicking on the button the title of the page should change to Clicked ${count} times

// 2. create a simple todo app
// Use mock server to retrieve todo list when the component mounts
// there should be loading and error states managed and shown to the UI( mandatory )
// build a pagination component that will change the page and fetch data for you

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
