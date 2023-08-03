import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";


export const context = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    case "reset": {
      return initialState;
    }
    default:
      return state;
  }
};
const ParentComponent = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <ComponentA />
      <ComponentB />
    </context.Provider>
  );
};

export default ParentComponent;
