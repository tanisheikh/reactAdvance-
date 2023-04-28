import React, { Component } from 'react';
import ButtonThemeContext from './ButtonTheme'

export class ContextButton extends Component {
  render() {
    let theme=this.context;
    return <button style={{ backgroundColor: theme.background, color: theme.color }}>Context Button</button>

  }
}

export default ContextButton;
ContextButton.contextType=ButtonThemeContext;