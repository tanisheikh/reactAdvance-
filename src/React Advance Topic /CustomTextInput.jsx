import React, { Component } from "react";

export class CustomTextInput extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
       <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default CustomTextInput;
