import React from "react";
import ContextComponent from "./ContextComponent";
import ChildComponent from "./ChildComponent";

const Provider = () => {

  const sharedValue = { id: 1, name: "xyz", email: "xyz@gmail.com" };

  return (
    <ContextComponent.Provider value={sharedValue}>
      <ChildComponent />    
    </ContextComponent.Provider>
  );
};

export default  Provider;



