import React from "react";
import ComponentB from "./ComponentB";
 import ComponentC from "./ComponentC";

export const UserContext = React.createContext();
export const ChannelContex = React.createContext();

const ComponentA = () => {
  const employee = { name: "john deo", age: 20 };
const employeeData=JSON.stringify(employee);
console.log("employeeData>>",employeeData)
  return (
    <div>
      <UserContext.Provider value={"john deo"}>
        <ChannelContex.Provider value={employeeData}>
          <ComponentB />
          <ComponentC />
        </ChannelContex.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;
