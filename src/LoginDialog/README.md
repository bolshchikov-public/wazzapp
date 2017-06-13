# LoginDialog

A container that holds:
* `<LoginImageCapture/>`
* A form to set the username & phonenumber

Holds the state of login form (username, phone number, image data), validates the form and submits it

Adds the user to localStorage (key: `wazzapp-user`)

Saves the user to firebase:

```javascript
firebase.database().ref(`users/${this.state.phoneNumber}`).update({
  userName: this.state.userName,
  phoneNumber: this.state.phoneNumber,
  imageData: this.state.imageData
});
````
