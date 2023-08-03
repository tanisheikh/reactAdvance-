import React, { useState, Profiler } from "react";
// import ParentRef from './React Advance Topic /Ref And ForwordRef/ParentRef';
// import KeyFragment from './React Advance Topic /KeyFragment';
// import UserList from './HOC /UserList';
// import String from './Functions as Children/String';
import NoPortalExample from "./ReactPortal/NoPortalExample";
import PortalExample from "./ReactPortal/PortalExample";
import ReferencingValuewithRefs from "./React Advance Topic /Ref And ForwordRef/ReferencingValue withRefs";
import MessageBoxWithRef from "./React Advance Topic /Ref And ForwordRef/MessageBoxWithRef";
import Form from "./Profiler/Form";
import UseState from "./Hooks in React js /UseState/UseState";
import CComponent from "./Hooks in React js /UseEffects/CComponent";
import FComponnet from "./Hooks in React js /UseEffects/FComponnet";
// import UseRef from "./Hooks in React js /UseRef";
import PTodoList from "./Hooks in React js /UseMemo/Skipping recalculation with/PTodoList";
import PUseContext from "./Hooks in React js /UseContext/PUseContext";
import UseReducer from "./Hooks in React js /UseReducer/UseReducer";
import UseId from "./Hooks in React js /UseId/UseId";
import Mounting from "./Life Cycle Methods/Mounting";
import PrentComponnet from "./PureComponent/PrentComponnet";
import LoginControl from "./Conditional Rendering/LoginControl";
import Counter1 from "./Hooks in React js /CoustomHooks/UseCounter/Counter1";
import Counter2 from "./Hooks in React js /CoustomHooks/UseCounter/Counter2";
import UserForm from "./Hooks in React js /CoustomHooks/UserForm";
import PrevState from "./Hooks in React js /UseState/PrevState";
import UseStateWithObject from "./Hooks in React js /UseState/UseStateWithObject";
import UseStateWithArray from "./Hooks in React js /UseState/UseStateWithArray";
import ClassCounter from "./Hooks in React js /UseEffects/ClassCounter";
import FuncCounter from "./Hooks in React js /UseEffects/FuncCounter";
import HooksMouse from "./Hooks in React js /UseEffects/HooksMouse";
import UseEffectWithCorrectDependency from "./Hooks in React js /UseEffects/UseEffectWithCorrectDependency";
import DataFetching from "./Hooks in React js /UseEffects/DataFetching";
import ComponentA from "./Hooks in React js /UseContext/UseContextExample2/ComponentA";
// import ComponentC from "./Hooks in React js /UseContext/UseContextExample2/ComponentC";
import CounterOne from "./Hooks in React js /UseReducer/UseReducerEx2/CounterOne";
import CounterTwo from "./Hooks in React js /UseReducer/UseReducerEx2/CounterTwo";
import ParentComponent from "./Hooks in React js /UseReducer/useReducer withUseContext/ParentComponent";
import DataFetcingOne from "./Hooks in React js /UseReducer/Fetching Data with useReducer/DataFetcingOne";
import DataFetchingTwo from "./Hooks in React js /UseReducer/Fetching Data with useReducer/DataFetchingTwo";
import UseLayOutEffect from "./All React Hooks/UseLayOutEffect";
import Mounting_Phase from "./Easy Way Life Cycle Method/Mounting_Phase";
import Updating_Phase from "./Easy Way Life Cycle Method/Updating_Phase";
import UnMounting_Phase from "./Easy Way Life Cycle Method/UnMounting_Phase";
import UseEffects from "./All React Hooks/UseEffects";
// import ChildComponent from "./All React Hooks/UseContext/ChildComponent";
import UseEffectLayout from "./All React Hooks/UseEffectLayout";
import UseMemo from "./All React Hooks/UseMemo";
import WithOutUseMemo from "./All React Hooks/WithOutUseMemo";
import ChildCom from "./All React Hooks/Ref with Forward Ref/ChildCom";
import UseCallBack from "./All React Hooks/UseCallBack/UseCallBack";
import UseRef from "./All React Hooks/Ref with Forward Ref/ UseRef";
import UseRefWithState from "./All React Hooks/Ref with Forward Ref/UseRefWithState";
import UseReducerComplexEx from "./All React Hooks/UseReducer/UseReducerComplexEx";
 import ParentCom from './All React Hooks/Ref with Forward Ref/ParentCom';
import Com1 from "./All React Hooks/useReducerWithuseContext_03-08/AllComponent/Com1";
// import Com2 from "./All React Hooks/useReducerWithuseContext_03-08/AllComponent/Com2";
const App = () => {
  const arrayData = [
    {
      id: 1,
      name: "john",
    },
    {
      id: 2,
      name: "Deo",
    },
    {
      id: 3,
      name: "Alan",
    },
  ];

  const callBack = (
    id,
    phase,
    actualDuration,
    startTime,
    baseDuration,
    commitTime,
    interactions
  ) => {
    console.log(
      "id " +
        id +
        " startTime " +
        startTime +
        " actualDuration " +
        actualDuration +
        " baseDuration " +
        baseDuration +
        " commitTime " +
        commitTime +
        " phase " +
        phase +
        " interactions " +
        interactions
    );
  };
  const [flag, setFlag] = useState(true);
  return (
    <div>
      <ParentCom/>
      {/* <ChildCom/> */}
      {/* <Com1 /> */}
      {/* <Com2 /> */}
      {/* <UseReducerComplexEx/> */}
      {/* <UseRefWithState/> */}
      {/* <UseRef/> */}
      {/* <UseCallBack/> */}
      {/* <UseMemo/>
      <ChildCom/> */}
      {/* <WithOutUseMemo/> */}
      {/* <UseEffectLayout/>  */}
      {/* <ChildComponent /> */}
      {/* <ParentCom/> */}
      {/* <UseEffects/> */}
      {/* <Mounting_Phase /> */}
      {/* <Updating_Phase /> */}
      {/* <UnMounting_Phase /> */}
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
      {/* <UseReducer/> */}
      {/* <UseId/> */}
      {/* <LoginControl/> */}
      {/* <Counter1/>
      <Counter2/> */}
      {/* <UserForm /> */}
      {/* <PrevState/> */}
      {/* <UseStateWithObject/> */}
      {/* <UseStateWithArray/> */}
      {/* <ClassCounter/> */}
      {/* <FuncCounter/> */}
      {/* <HooksMouse/> */}
      {/* <UseEffectWithCorrectDependency/> */}
      {/* <DataFetching/> */}
      {/* <ComponentA/> */}
      {/* <ComponentC/> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo/> */}
      {/* <ParentComponent/> */}
      {/* <DataFetcingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <UseLayOutEffect/> */}
    </div>
  );
};

export default App;
