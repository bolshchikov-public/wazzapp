import React, { Component } from 'react'
import './Login.css';
import LoginDialog from '../LoginDialog/LoginDialog';

class Login extends Component {
  render () {
    return (
      <div className="login-container">
        <div className="login-top"></div>
        <div className="login-bottom"></div>
        <LoginDialog />
      </div>
    )
  }
}

export default Login