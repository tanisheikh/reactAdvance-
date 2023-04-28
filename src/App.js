 import React, { useState,Profiler } from 'react'
// import ParentRef from './React Advance Topic /Ref And ForwordRef/ParentRef';
// import KeyFragment from './React Advance Topic /KeyFragment';
// import UserList from './HOC /UserList';
// import String from './Functions as Children/String';
import NoPortalExample from './ReactPortal/NoPortalExample';
import PortalExample from './ReactPortal/PortalExample';
import ReferencingValuewithRefs from './React Advance Topic /Ref And ForwordRef/ReferencingValue withRefs';
import MessageBoxWithRef from './React Advance Topic /Ref And ForwordRef/MessageBoxWithRef';
import Form from './Profiler/Form';
import UseState from './Hooks in React js /UseState';
import CComponent from './Hooks in React js /UseEffects/CComponent';
import  FComponnet from './Hooks in React js /UseEffects/FComponnet';
import UseRef from './Hooks in React js /UseRef';
import PTodoList from './Hooks in React js /UseMemo/Skipping recalculation with/PTodoList';
import PUseContext from './Hooks in React js /UseContext/PUseContext';
import UseReducer from './Hooks in React js /UseReducer/UseReducer'   ;
import UseId from './Hooks in React js /UseId/UseId'
const App = () => {
  const arrayData=[
    {
      id:1,
      name:"john",

    },
    {
      id:2,
      name:"Deo",

    },
    {
      id:3,
      name:"Alan",

    }
  ];

  const callBack =(id, phase, actualDuration, startTime, 
    baseDuration, commitTime, interactions)=>{
      console.log(
        "id " + id + 
        " startTime " + startTime + 
        " actualDuration " + actualDuration + 
        " baseDuration " + baseDuration + 
        " commitTime " + commitTime + 
        " phase " + phase + 
        " interactions " + interactions
      );
  }
  const [flag,setFlag]=useState(true);
  return (
    <div>
      {/* <ParentRef/> */}
      {/* <KeyFragment arrayData={arrayData}/> */}
      {/* <UserList/>
      <String/> */}
      {/* <NoPortalExample/>
      <PortalExample/>
      // <MessageBoxWithRef/> */}
      {/* // <Profiler id="reactjs" onRender={callBack}>
      //   <Form labelName="Input Box " />
      // </Profiler> */}
      {/* <UseState/> */}
      {/* <div> <button onClick={()=>{setFlag(!flag)}}>Toggle Button</button>
      {flag ?<FComponnet/>:""}</div> */}
      {/* <PTodoList/> */}
      {/* <PUseContext/> */}
      <UseReducer/>
      {/* <UseId/> */}
    </div>
  )
}

export default App;


