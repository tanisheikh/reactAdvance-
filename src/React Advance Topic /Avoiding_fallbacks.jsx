import React, { Suspense, useState } from "react";
import Code_Splitting from "./Code_Splitting";
import CustomTextInput from "./CustomTextInput";
const OtherComponent = React.lazy(() => import("./OtherComponent"));
const AnotherComponent = React.lazy(() => import("./InputFocus"));

const Avoiding_fallbacks = () => {
  const [tab, setTab] = useState("OtherComponent");

  const handleTabSelect = (tab) => {
    setTab(tab);
    //Code_Splitting  component  is Tab Component send as a props handleTabSelect function
  };
  return (
    <div>
      <Code_Splitting handleTabSelect={handleTabSelect} />
      <Suspense fallback={<CustomTextInput />}>
        {tab === "OtherComponent" ? <OtherComponent /> : <AnotherComponent />}
      </Suspense>
    </div>
  );
};

export default Avoiding_fallbacks;
