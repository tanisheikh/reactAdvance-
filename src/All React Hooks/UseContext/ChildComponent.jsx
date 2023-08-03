import React, { useContext, useRef } from "react";
// import ContextComponent from "./ContextComponent";

const ChildComponent = () => {
  const contextData = useContext(ContextComponent);
  const ref = useRef();

  console.log("contextData", contextData);
  console.log("ref>>>", ref);
  return <div>{contextData.name}</div>;
};

export default ChildComponent;
