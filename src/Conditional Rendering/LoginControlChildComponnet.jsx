import React, { Component } from "react";

export const LoginButton = (props) => {
  return <button onClick={props.onClick}>LogIn</button>;
};
export const LogOutButton = (props) => {
  return <button onClick={props.onClick}>LogOut</button>;
};
