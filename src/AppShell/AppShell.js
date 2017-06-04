// @ts-check
import React, { Component } from 'react';
import App from '../App/App';
import Login from '../Login/Login';

class AppShell extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return (
      this.state.isLoggedIn ? <App /> : <Login />
    )
  }
}

export default AppShell;
