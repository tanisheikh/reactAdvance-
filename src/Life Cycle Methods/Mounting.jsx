import React, { Component } from "react";
import ChildMounting from "./Childmounting";
import ComponentWillUnmount from "./ComponentWillUnmount";
class Mounting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "tani",
      error: false,
      delete: false,
    };
    console.log("  parent Componnet constructor called");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" parent Componnet getDerivedStateFromProps called");
    return null;
  }
  componentDidMount() {
    console.log("  parent ComponnetcomponentDidMount called");
  }
  shouldComponentUpdate() {
    console.log("  parent shouldComponentUpdate called");
    return true;
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log(" parent ComponnetgetSnapshotBeforeUpdate called");
    return null;
  }
  componentDidUpdate() {
    console.log("  parent ComponnetcomponentDidUpdate called");
  }
  componentDidCatch() {
    console.log("  parent componentDidCatch called");
    this.state({ error: true });
  }
  forceUpdateButton = () => {
    this.forceUpdate();
    console.log("  parent forceUpdate called");
  };
  ChangeStateClickEvent = () => {
    this.setState({
      name: "john deo",
    });
  };

  deleteSate = () => {
    this.setState({
      delete: true,
    });
  };

  render() {
    console.log("parent Componnet render called");

    return (
      <>
        <div>Mounting Methods {this.state.name}</div>
        <button onClick={this.ChangeStateClickEvent}>Change State</button>
        <button onClick={this.forceUpdateButton}> forceUpdateButton</button>
        <button onClick={this.deleteSate}>Delete Unmount Component</button>

        <div>
          {this.state.error ? (
            <div style={{ border: "2px solid red" }}>Error</div>
          ) : (
            <ChildMounting />
          )}
          {this.state.delete? null :  <ComponentWillUnmount />}
        
        </div>
      </>
    );
  }
}

export default Mounting;
