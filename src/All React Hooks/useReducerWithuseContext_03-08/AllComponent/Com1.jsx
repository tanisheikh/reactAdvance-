import React,{useContext} from 'react';
import ContexCreate from './ContextMain'

const Com1 = () => {

const contextData=useContext(ContexCreate);
console.log("contextData>>",contextData)
  return (
    <>
    com1
    </>
  );
}

export default Com1;
