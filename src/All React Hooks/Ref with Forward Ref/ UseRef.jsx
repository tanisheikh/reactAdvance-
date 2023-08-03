import React, { useRef } from "react";

const UseRef = () => {
  const textRef = useRef();

  const handleClick = () => {
    textRef.current.value = "The quick brown fox jumps over the lazy dog";
    textRef.current.focus();
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Action
      </button>
      <label>Click on the action button to focus and populate the text.</label>
      <textarea ref={textRef} />
    </div>
  );
};

export default UseRef;    
