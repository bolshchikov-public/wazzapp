// @ts-check
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import * as firebase from 'firebase/app';
import UserManagement from '../UserManagement';
import ChatConversation from '../ChatConversation';
import FilteredChatList from '../FilteredChatList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentChat: null
    }
  }

  _creatUserAssosiation(userId1, userId2, chatKey) {
    firebase.database()
      .ref(`users/${userId1}/chatWith/${userId2}`)
      .set(chatKey);
    firebase.database()
      .ref(`users/${userId2}/chatWith/${userId1}`)
      .set(chatKey);
  }

  _createNewChat(userId1, userId2) {
    firebase.database()
      .ref('chats')
      .push({ timestamp: -1 })
      .then(data => {
        this.setState({ currentChat: data.key });
        this._creatUserAssosiation(userId1, userId2, data.key);
      });
  }

  chooseChat(userId) {
    firebase.database()
      .ref(`users/${this.props.currentUser.phoneNumber}/chatWith/${userId}`)
      .once('value', (snapshot) => {
        if (snapshot.val() === null) {
          this._createNewChat(this.props.currentUser.phoneNumber, userId);
        } else {
          this.setState({
            currentChat: snapshot.val()
          });
        }
      });
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-list-container">
          <UserManagement
            currentUser={this.props.currentUser}
            onLogout={this.props.onLogout}
          />
          <FilteredChatList currentUser={this.props.currentUser} onSelect={this.chooseChat.bind(this)} />
        </div>
        {
          this.state.currentChat ?
            <ChatConversation /> :
            <div className="chat-empty-container">
              <h1>Welcome to WazzApp</h1>
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default App;
