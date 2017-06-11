import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';
import * as firebase from 'firebase/app';

class LoginDialog extends Component {

  constructor() {
    super();
    this.state = {
      imageData: null,
      phoneNumber: null,
      userName: null
    };
  }

  _hasValidImageData() {
    return this.state.imageData !== null;
  }

  _hasValidPhoneNumber() {
    return this.state.phoneNumber !== null && this.state.phoneNumber.length > 1;
  }

  _hasValidUserName() {
    return this.state.userName !== null && this.state.userName.length > 1;
  }

  _save() {
    window.localStorage.setItem('wazzapp-user', JSON.stringify(this.state));
    return firebase.database().ref(`users/${this.state.phoneNumber}`).update({
      userName: this.state.userName,
      phoneNumber: this.state.phoneNumber,
      imageData: this.state.imageData
    });
  }

  captureSuccess(imageData) {
    this.setState({
      imageData
    });
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  onEnter() {
    this._save().then(() => {
      this.props.onLogin(Object.assign({}, this.state));
    });
  }

  render() {
    const isValid = this._hasValidImageData() && this._hasValidPhoneNumber() && this._hasValidUserName();
    return (
      <div className="login-dialog-container">
        <div className="profile-capture">
          <LoginImageCapture onCapture={this.captureSuccess.bind(this)} />
        </div>
        <div>
          <h3 className="login-dialog-title">WazzApp</h3>
          <p className="login-dialog-subtitle">Use WazzApp, create your profile picture and enter your name</p>
          <p>
            <input className="login-credentials"
              placeholder="Enter your phone number"
              name="phoneNumber"
              type="tel"
              pattern="[0-9]"
              onChange={this.onInputChange.bind(this)} />
          </p>
          <p>
            <input className="login-credentials"
              placeholder="Enter your name"
              name="userName"
              type="text"
              onChange={this.onInputChange.bind(this)} />
          </p>
          <button className="button button-big login-button" disabled={!isValid} onClick={this.onEnter.bind(this)}>ENTER</button>
        </div>

        <div className="login-dialog-validations">
          <ol>
            {(!this._hasValidImageData()) ? <li>Capture your profile image</li> : null}
            {(!this._hasValidPhoneNumber()) ? <li>Missing phone number</li> : null}
            {(!this._hasValidUserName()) ? <li>Missing user name</li> : null}
          </ol>
        </div>
      </div>
    )
  }
}

export default LoginDialog