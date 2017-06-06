// @ts-check
import React, { Component } from 'react';
import App from '../App';
import Login from '../Login';

class AppShell extends Component {

  constructor() {
    super();
    const currentUser = JSON.parse(window.localStorage.getItem('wazzapp-user'));
    currentUser ?
      this.state = this._generateLoggedInState(currentUser) :
      this.state = this._generateLoggedOutState();
  }

  _generateLoggedInState(currentUser) {
    return {
      isLoggedIn: true,
      currentUser
    }
  }

  _generateLoggedOutState() {
    return {
      isLoggedIn: false,
      currentUser: null
    }
  }

  loginSuccess(currentUser) {
    this.setState(this._generateLoggedInState(currentUser));
  }

  logoutSuccess() {
    this.setState(this._generateLoggedOutState());
  }

  render() {
    return (
      this.state.isLoggedIn ?
        <App currentUser={this.state.currentUser} onLogout={this.logoutSuccess.bind(this)} /> :
        <Login onLogin={this.loginSuccess.bind(this)} />
    )
  }
}

export default AppShell;
