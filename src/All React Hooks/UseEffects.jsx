import React, { useEffect, useState } from "react";

const UseEffects = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    return () => {
      console.log(
        "DataFetching component unmounted or updated, canceling data fetch..."
      );
    };
  }, []);
  return (
    <div>
      {data.map((dataObj) => {
        return (
          <React.Fragment key={dataObj.id}>
            <h1>{dataObj.title}</h1>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default UseEffects;
