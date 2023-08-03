import React, { Component } from "react";

export default class Mounting_Phase extends Component {
  constructor(props) {
    console.log('constucter Called')
    super(props);
    this.state = {
      message: "Hello, world!",
    };
  }
componentDidMount(){
    console.log('component did mount called')
}
  render() {
    console.log('Render Method  Called')

    return <div>{this.state.message}</div>;
  }
}
