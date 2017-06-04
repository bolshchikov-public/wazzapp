import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture/LoginImageCapture';

class LoginDialog extends Component {
  render () {
    return (
      <div className="login-dialog-container">
        <div className="profile-capture">
          <LoginImageCapture />
        </div>
        <div>
          <h3 className="login-dialog-title">WazzApp</h3>
          <p className="login-dialog-subtitle">Use WazzApp, create your profile picture and enter your name</p>
          <p>
            <input className="login-credentials" placeholder="Enter your name" />
          </p>
          <button className="button button-big login-button">ENTER</button>
        </div>
      </div>
    )
  }
}

export default LoginDialog