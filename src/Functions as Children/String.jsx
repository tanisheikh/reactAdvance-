import React from "react";
import Repeat from "./FunctionsChildren";
function String() {
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
//   const props = {
//     id: 1,
//     name: "john",
//   };

  return (
    <div>
      <Repeat array={arrayData}>
        {(arrayData, index) => (
          <div key={index}>
            This is arrayData Id {arrayData.id} and arrayData Name{" "}
            {arrayData.name}
          </div>
        )}
      </Repeat>
    </div>
  );
}

export default String;
