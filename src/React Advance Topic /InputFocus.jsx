import React, { Component } from "react";
import CustomTextInput from './CustomTextInput';
export class InputFocus extends Component {
  constructor(props) {
    super(props);
   
    // Create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    //bind method in class component
    this.focusFunc = this.focusFunc.bind(this);
  }
  focusFunc() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} onClick={this.focusFunc} />
      </div>
    );
  }
}

export default InputFocus;
