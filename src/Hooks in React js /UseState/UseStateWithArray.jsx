import React, { useState,useRef} from "react";

const UseStateWithArray = () => {
  const fruitArray = ["apple", "banana", "mango"];
  const [number, setNumber] = useState([]);
  const [fruits, setFruits] = useState("");
  const inputRef = useRef(null);


  const [fruitsArray, setFruitsArray] = useState(fruitArray);
  const addArray = () => {
    setNumber([
      ...number,
      { id: number.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  const inputValue = (e) => {
    console.log("e",e)
    setFruits(e.target.value);
  };
  const addArrayFruits = () => {
    setFruitsArray([...fruitsArray, fruits]);
  };
//   const handleKeyDown=(e)=>{
// if(e.key==="Enter"){
//     setFruits(inputRef.current.value)
// }
//   }
  // onChange={inputValue}
  return (
    <div>
      {/* <input type="text" ref={inputRef}  onKeyDown={inputValue} tabIndex={0}/> */}
      <input type="text"  onChange={inputValue} tabIndex={0}/>

      <button onClick={addArrayFruits}>Add Btn</button>

      <button onClick={addArray}>Add Btn</button>
      <ul>
        {number.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <li>{item.id}</li>
              <li>{item.value}</li>
            </React.Fragment>
          );
        })}
      </ul>
      <ul>
        {fruitsArray.map((fruitItem, index) => {
          return (
            <React.Fragment key={index}>
              <li>{fruitItem}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateWithArray;
