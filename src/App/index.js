// @ts-check
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import * as firebase from 'firebase/app';
import ChatShell from '../ChatShell';
import UserManagement from '../UserManagement';
import FilteredChatList from '../FilteredChatList';

class App extends Component {
  
  _creatUserAssosiation(userId1, user2, chatKey) {
  firebase.database()
    .ref(`users/${userId1}/chatWith/${user2.phoneNumber}`)
    .set(chatKey);
  firebase.database()
    .ref(`users/${user2.phoneNumber}/chatWith/${userId1}`)
    .set(chatKey);
};

_createNewChat(userId1, user2) {
  firebase.database()
    .ref('chats')
    .push({ timestamp: -1 })
    .then(data => {
      this.setState({ currentChat: data.key, otherUser : user2 });
      this._creatUserAssosiation(userId1, user2, data.key);
    });
};

handleSelectedUser (user) {
    //this.setState({otherUser : user }); 
    firebase.database()
      .ref(`users/${this.context.currentUser.phoneNumber}/chatWith/${user.phoneNumber}`)
      .once('value', (snapshot) => {
        if(typeof snapshot !== 'undefined' && snapshot.val() !== null ) {
          this.setState({ currentChat: snapshot.val(), otherUser: user });
          this._creatUserAssosiation(this.context.currentUser.phoneNumber, user, snapshot.val());
        }
        else {
          this._createNewChat(this.context.currentUser.phoneNumber, user);
        }
      });
  }
  
  constructor (props) {
    super(props);
    this.state = {
      currentChat : {},
      otherUser : {}
    };
  };

  render () {
    return (
      <div>
        <FilteredChatList onSelect={this.handleSelectedUser} />
        <UserManagement onLogout={this.props.onLogout}/>
        <ChatShell opponent={this.state.otherUser.phoneNumber} chatId={this.state.currentChat}/>
      </div>
    );
  };
}

App.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

App.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default App;
