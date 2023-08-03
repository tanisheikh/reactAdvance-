import React, { useReducer } from "react";
import ContexCreate from "./ContextMain";
import Com1 from "./AllComponent/Com1";
import Com2 from "./AllComponent/Com2";
import Com3 from "./AllComponent/Com3";

const Main = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;
      default:
        return state;
        break;
    }
  };

  const [data, dispatch] = useReducer(reducer, initialState);

  return (
    <ContexCreate.Provider value={{ countData: data }}>
      <Com1/>
      <Com2 />
      <Com3 />
    </ContexCreate.Provider>
  );
};

export default Main;
