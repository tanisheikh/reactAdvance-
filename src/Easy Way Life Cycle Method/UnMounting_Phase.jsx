import React, { Component } from "react";
import PrevState from "../Hooks in React js /UseState/PrevState";
//This phase occurs when a component is removed from the DOM.
// Lifecycle Method:

// componentWillUnmount(): This method is called right before the component is removed from the DOM. It's used for cleanup tasks like clearing intervals or unsubscribing from event listeners.

export default class UnMounting_Phase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.intervelID = null;
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
        console.log("componentDidMount called");

      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.intervelID);
  }
  render() {
    return (
      <div>
        <p>Timer: {this.state.count} seconds</p>
      </div>
    );
  }
}
