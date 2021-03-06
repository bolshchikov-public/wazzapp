// @ts-check
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import * as firebase from 'firebase/app';
import ChatShell from '../ChatShell';
import UserManagement from '../UserManagement';
import FilteredChatList from '../FilteredChatList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentChat: null,
      opponent: null
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

  chooseChat(user) {
    const userId = user.phoneNumber;
    this.setState({
      opponent: user
    });
    firebase.database()
      .ref(`users/${this.context.currentUser.phoneNumber}/chatWith/${userId}`)
      .once('value', (snapshot) => {
        if (snapshot.val() === null) {
          this._createNewChat(this.context.currentUser.phoneNumber, userId);
        } else {
          this.setState({
            currentChat: snapshot.val()
          });
        }
      });
  }

  _renderConversation() {
    return (
      <ChatShell opponent={this.state.opponent} chatId={this.state.currentChat} />
    );
  }

  _renderEmptyConversation() {
    return (
      <div className="chat-empty-container">
        <h1>Welcome to WazzApp</h1>
      </div>
    );
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-list-container">
          <UserManagement onLogout={this.props.onLogout} />
          <FilteredChatList onSelect={this.chooseChat.bind(this)} />
        </div>
        {
          this.state.currentChat ?
            this._renderConversation() :
            this._renderEmptyConversation()
        }
      </div>
    );
  }
}

App.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

App.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default App;
