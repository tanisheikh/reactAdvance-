import React, { useRef, useImperativeHandle, forwardRef } from "react";

const ChildCom = (props, ref) => {
  const btn = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("Input is in focus");
    },
  }));
  return <input ref={btn} {...props} placeholder="type here" />;
};

export default forwardRef(ChildCom);
