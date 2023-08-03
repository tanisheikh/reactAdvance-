import React, { useState } from "react";

// useSate example with string,boolean ,array and object with how to change state array and add array
const UseState = () => {
  const [name, setName] = useState();
  const [flag, setflag] = useState(false);
  //only  first time render not every updated state render component
  const [steps, setSteps] = useState(() => {
    console.log("clicked");
    return 0;
  });
  const [names, setNames] = useState([]);

  const changeValue = () => {
    return setflag(!flag);
  };
  const increment = () => {
    //  setSteps((prevState)=>prevState +1);
    // setSteps((prevState)=>prevState +1);
    return setSteps(steps + 1);
  };
  const decrement = () => {
    // return setSteps(steps - 1);
    setSteps((prevState) => prevState - 1);
    setSteps((prevState) => prevState - 1);
  };
  const submitbutton = (e) => {
    e.preventDefault();
    setNames([...names, { id: names.length, name }]);
    setName("");
  };
  return (
    <div>
      <h1>{flag ? name : ""}</h1>
      <button onClick={changeValue}>Click Me </button>
      <br />
      <button onClick={increment}>+ </button>
      <h1>{steps}</h1>
      <button onClick={decrement}> - </button>
      <hr />
      <form onSubmit={submitbutton}>
        <input
          type="text"
          value={name}
          placeholder="Enter Your Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit Here</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseState;
