import React, { Component, PureComponent } from "react";

class ChildComponent1 extends Component {
  render() {
    console.log(" regular Component render")

    return <div>  Regular ChildComponent1 {this.props.name}</div>;
  }
}

export default ChildComponent1;
