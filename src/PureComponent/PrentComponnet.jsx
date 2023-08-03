import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import ChildComponent1 from "./ChildComponent1";

class PrentComponnet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tani",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "tani",
      });
    }, 2000);
  }
  render() {
    console.log("****************parent Component****************");
    return (
      <div>
        PrentComponnet
        <ChildComponent name={this.state.name} />
        <ChildComponent1 name={this.state.name} />
      </div>
    );
  }
}

export default PrentComponnet;
