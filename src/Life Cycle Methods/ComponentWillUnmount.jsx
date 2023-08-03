import React, { Component } from 'react'

export class ComponentWillUnmount extends Component {
    componentWillUnmount(){
        alert("Deleted User successfully" + "ComponentWillUnmount called")
    }
  render() {
    console.log("ComponentWillUnmount called")
    return (
      <div>
          <h3>Username: Rahul</h3>
        <h3>Email: rbbansal558@gmail.com</h3>
      </div>
    )
  }
}

export default ComponentWillUnmount