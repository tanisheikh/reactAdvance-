import React, { useState } from 'react'

const AddList = () => {
    const [text,setText]= useState("")
  return (
    <div><input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />
    <button> Add </button>
    </div>
  )
}

export default AddList