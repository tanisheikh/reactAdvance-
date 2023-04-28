import React, { Component } from "react";
import { ContextThemeColor } from "./ContextThemeColor";

export class ContextButton extends Component {
  render() {
    let color = this.context;
    return (
      <>
        <button
          style={{
            backgroundColor: color,
          }}
        >
          context Button
        </button>
      </>
    );
  }
}
export default ContextButton;
ContextButton.contextType = ContextThemeColor;
