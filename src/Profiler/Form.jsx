import React,{useState} from 'react'

const Form = (props) => {
    const [text,setText]=useState("");
    const {labelName,...rest}=props;
    console.log("...rest>>>",{...rest})
  return (
    <div>
        <label {...rest} >
            {labelName}:
            <input  type="text" value ={text} onChange={(e)=>{setText(e.target.value)}}/>
        </label>
    </div>
  )
}

export default Form;