// @ts-check
import React, { Component } from 'react';
import App from '../App/App';
import Login from '../Login/Login';

class AppShell extends Component {

  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      currentUser: null
    }
  }

  loginSuccess(currentUser) {
    this.setState({
      isLoggedIn: true,
      currentUser
    });
  }

  render() {
    return (
      this.state.isLoggedIn ? <App currentUser={this.state.currentUser} /> : <Login onLogin={this.loginSuccess.bind(this)} />
    )
  }
}

export default AppShell;
