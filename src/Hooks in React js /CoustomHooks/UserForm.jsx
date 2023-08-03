import React from "react";
import useInput from "./UseCounter/useInput";

const UserForm = () => {
  const  [firstName,bindFirstName,resetFirstName]=useInput("");
  const  [lastName,bindLastName,resetLastName]=useInput("")


 const  handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName();
    resetLastName();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>FirstName:</label>
        <input
        type="text"
       {...bindFirstName}
      />
      </div>
   <div>
    <label>LastName:</label>
    <input
        type="text"
       {...bindLastName}
      />
   </div>
     
      <button>Submit</button>
    </form>
  );
};

export default UserForm;
