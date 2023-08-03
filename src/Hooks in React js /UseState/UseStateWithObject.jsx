import React, { useState } from 'react'

const UseStateWithObject = () => {
    const obj={firstName:"",
lastName:""}
    const[name,setName]=useState(obj)
  return (
    <div>
        <input type="text" onChange={(e)=>{setName({...name,firstName:e.target.value})}}/>
        <input type="text" onChange={(e)=>{setName({...name,lastName:e.target.value})}}/>
        <h2>{JSON.stringify(name)}</h2>

    </div>
  )
}

export default UseStateWithObject;