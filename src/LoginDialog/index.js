import React, { Component } from 'react'
import './LoginDialog.css';
import LoginImageCapture from '../LoginImageCapture';

class LoginDialog extends Component {

  constructor() {
    super();
    this.state = {
      imageData: null,
      phoneNumber: null,
      userName: null
    }
  }

  _hasValidImageData() {
    return this.state.imageData !== null;
  }

  _hasValidPhoneNumber() {
    return this.state.phoneNumber !== null && this.state.phoneNumber.length === 10;
  }

  _hasValidUserName() {
    return this.state.userName !== null && this.state.userName.length > 1;
  }

  _save() {
    return new Promise((resolve, reject) => {
      window.localStorage.setItem('wazzapp-user', JSON.stringify(this.state));
      console.log('send data to firebase', this.state);
      resolve();
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