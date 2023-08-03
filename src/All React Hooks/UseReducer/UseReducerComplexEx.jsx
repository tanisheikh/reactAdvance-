import React, { useReducer } from "react";

const UseReducerComplexEx = () => {
  const initialState = {
    counterOne: 0,
    counterTwo: 10,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, counterOne: state.counterOne + action.value };

      case "decrement":
        return { ...state, counterOne: state.counterOne - action.value };
      case "increment2":
        return { ...state, counterTwo: state.counterTwo + action.value };

      case "decrement2":
        return { ...state, counterTwo: state.counterTwo - action.value };

      case "reset":
        return initialState;

      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(
    "count>>>",
    count,
    "initialState>>>",
    initialState,
    "reducer>>",
    reducer
  );
  return (
    <>
      <div>
        <h1>{count.counterOne}</h1> <h1>{count.counterTwo}</h1>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment", value: 1 })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          Decrement
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "increment2", value: 5 })}
        >
          Increment2
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "decrement2", value: 5 })}
        >
          Decrement2
        </button>
        <button type="button" onClick={() => dispatch({ type: "reset" })}>
          Reset
        </button>
      </div>
    </>
  );
};

export default UseReducerComplexEx;
