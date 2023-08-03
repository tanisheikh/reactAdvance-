import React, { Component } from "react";

export default class Updating_Phase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count)
      console.log("Counter updated called:", this.state.count);
  }
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return  <div>
    <p>Count: {this.state.count}</p>
    <button onClick={this.increment}>Increment</button>
  </div>
  }
}
