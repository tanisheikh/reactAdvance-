import React, { useRef, useImperativeHandle, forwardRef } from "react";
import ChildCom from './ChildCom';
const ParentCom = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <ChildCom onFocus={() => inputRef.current.focus()} ref={inputRef} />
    </div>
  );
};

export default ParentCom;
