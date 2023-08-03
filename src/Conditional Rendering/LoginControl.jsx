import React, { Component } from "react";
import { LoginButton, LogOutButton } from "./LoginControlChildComponnet";
class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  handleLogOutClick = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
     console.info("State >>>> ", this.state.isLoggedIn);
    if (isLoggedIn) {
       button = <LogOutButton onClick={this.handleLogOutClick} />;
     } else {
       button = <LoginButton onClick={this.handleLoginClick} />;
     }
    console.info("Current Button >>>> ", button);
    return (
      <div>
        <h1>hiii Users</h1>
        {button}
      </div>
    );
  }
}

export default LoginControl;
