import React, { Component } from "react";
import { ButtonThemeContext, ButtonTheme } from "./ButtonTheme";

export class ContextDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ButtonTheme: ButtonTheme.primary,
    };
    this.changeButtontheme=()=>{
      this.setState(state=>({
        ButtonTheme:state.ButtonTheme=== ButtonTheme.primary ?ButtonTheme.secondary:ButtonTheme.primary
      }))  
    }

  }
    
  
  render() {
    return (
      <div>
        <ButtonThemeContext.Provider value={this.state.ButtonTheme}>

        </ButtonThemeContext.Provider>
        <button onClick={this.changeButtontheme}>Change Theme Button </button>
      </div>
    );
  }
}

export default ContextDemo;
