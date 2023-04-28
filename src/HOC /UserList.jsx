import React, { useEffect, useState } from "react";

function UserList() {
  const [user, setUser] = useState([]);
  //   const fetchUser = async () => {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  //     const json = await res.json();
  //     setUser(json);
  //   };
  const fetchUser = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUser(data);
      });
  };
  useEffect(() => {
 fetchUser();
  }, []);
  console.log("data>>>", user);

  return <div>UserList</div>;
}

export default UserList;
