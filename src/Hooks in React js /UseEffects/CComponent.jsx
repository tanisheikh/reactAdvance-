import React, { Component } from "react";

export default class CComponent extends Component {
  state = {
    message: "class Componnet",
    times: new Date().toString(),
  };
  componentDidMount() {
    console.log("I am componentDidMount ");

    this.interval = setInterval(this.showDate, 1000);
  }
  componentDidUpdate() {
    console.log("I am componentDidUpdate ");
  }
  componentWillUnmountm() {
    console.log("I am componentWillUnmountm ");

    clearInterval(this.interval);
  }
  showDate = () => {
    this.setState({ times: new Date().toString() });
  };
  render() {
    return (
      <div>
        {this.state.message}
        <div>{this.state.times}</div>
      </div>
    );
  }
}
