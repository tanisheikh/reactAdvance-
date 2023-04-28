import React, { useReducer, useRef, useEffect } from "react";
// debugger;

debugger;
const UseReducer = () => {
  const preCountValue = useRef();
  const initialState = { count: 0, preCount: 0, sumCount: 0 };
  // useEffect(() => {
  //   console.log(" preCountValue.current-2 >>>", preCountValue.current.value);
  // }, [initialState.count]);

  const reducer = (state, action) => {
    debugger;
    // preCountValue.current = state.count;
    console.log(
      "preCountValue.current>>",
      preCountValue.current,
      "state.count>>>",
      state.count,
      "state.preCount>>",
      state.preCount
    );
    const valueToOperate = +preCountValue.current.value || 1;
    state.preCount = valueToOperate;
    if (action.type === "INCREMENT") {
      debugger;
      state = { ...state, previousState: state.count };

      // const preCountValues =preCountValue;
      // state.count = state.count + state.preCount;
      // state.preCount = preCountValues;
      // debugger;

      return { ...state, count: state.count + state.preCount };
    }

    if (action.type === "DECREMENT") {
      return { ...state, count: state.count - state.preCount };
    }
    if (action.type === "ADD") {
      return { ...state, count: action.payload };
    }
    return state;
  };

  debugger;

  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleChange = (e) => {
   // e.preventdefault();
  //   const payload = { type: "ADD", payload: parseInt(e.target.value) };

  //   dispatch(payload);

  //   debugger;
  // };

  return (
    <div>
      <h1>state:{state.count}</h1>
      <h1> previousValue {state.preCount}</h1>
      <h1>{state.count}</h1>
      Enter Number:
      <br />
      <input
        type="number"
        // onChange={(e) => {
        //   handleChange(e);
        // }}
        ref={preCountValue}
      />
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default UseReducer;
