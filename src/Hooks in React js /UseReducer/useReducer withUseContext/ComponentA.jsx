import React, { useContext } from "react";
import {context} from "./ParentComponent";

const ComponentA = () => {
  const contextCounter = useContext(context);
  return (
    <div>
        {contextCounter.countState}
      <button onClick={() => contextCounter.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => contextCounter.countDispatch("decrement")}>
        Decrement
      </button>

      <button onClick={() => contextCounter.countDispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
