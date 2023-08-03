import React, { useContext } from "react";
import { UserContext, ChannelContex } from "./ComponentA";

const ComponentC = () => {
  const User = useContext(UserContext);
  const employee = useContext(ChannelContex);
  const employeeData = JSON.parse(employee);
  console.log(employeeData, "ChannelContex>>");

  return (
    <div>
      {User}....
      ComponentC
      <br/>
      {employeeData.name} ----- {employeeData.age}
    </div>
  );
};
export default ComponentC;
