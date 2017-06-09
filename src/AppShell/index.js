// @ts-check
import React, { Component } from 'react';
import App from '../App';
import Login from '../Login';
import * as firebase from 'firebase/app';
import 'firebase/database';
import PropTypes from 'prop-types';

class AppShell extends Component {

  constructor() {
    super();

    firebase.initializeApp({
      apiKey: 'AIzaSyC3EaZqKldK4cz9lYGkLHh5NmPvICL-vVQ',
      authDomain: 'wazzapp-4b5cf.firebaseapp.com',
      databaseURL: 'https://wazzapp-4b5cf.firebaseio.com',
      projectId: 'wazzapp-4b5cf',
      storageBucket: 'wazzapp-4b5cf.appspot.com',
      messagingSenderId: '452145776981'
    });

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

  getChildContext() {
    return {
      currentUser: this.state.currentUser
    };
  }

  render() {
    return (
      this.state.isLoggedIn ?
        <App onLogout={this.logoutSuccess.bind(this)} /> :
        <Login onLogin={this.loginSuccess.bind(this)} />
    )
  }
}

AppShell.childContextTypes = {
  currentUser: PropTypes.object
}

export default AppShell;
