import React, { Component } from "react";

export class BlurExample extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.timeOutId = null;
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }
  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false,
      });
    });
  }
  onFocusHandler() {
    clearTimeout(his.timeOutId);
  }
  render() {
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          select an option
        </button>
        {this.state.isOpen &&( <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
        </ul>)}
       
      </div>
    );
  }
}

export default BlurExample;
