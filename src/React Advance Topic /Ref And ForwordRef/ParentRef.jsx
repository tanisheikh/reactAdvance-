import React, { Component } from "react";
import FRInput from "./FRInput";

export default class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
 
   clickHandler=()=>{
    this.inputRef.current.focus();
    
  }
  render() {
    debugger
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <br/>

        <button onClick={this.clickHandler}>focus button</button>
      </div>
    );
  }
}
