import React, { Component } from "react";
import ContextThemeColor from "./ContextThemeColor";
import ButtonHolder from "./ButtonHolder";

export class ContextDemo extends Component {
  render() {
    return (
      <ContextThemeColor.provider value="cyan">
        <ButtonHolder />
      </ContextThemeColor.provider>
    );
  }
}

export default ContextDemo;
