import React, { Component } from "react";
import {CounterContext} from './CounterContext.jsx'
export default class ClassUseContext extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter } = this.props;

    return (
      <div>
        <h1>Class UseContext</h1>
        <CounterContext.Consumer>
          {(value) => {
            return <h1>{value}</h1>;
          }}
        </CounterContext.Consumer>
      </div>
    );
  }
}
