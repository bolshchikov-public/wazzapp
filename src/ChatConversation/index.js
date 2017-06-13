// @ts-check
import './ChatConversation.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import MessageCloud from '../MessageCloud';
import ConversationInput from '../ConversationInput';

class ChatConversation extends Component {

  constructor(){
    super();
    this._clearState();
  }

  _subscribe(chatId) {
    if (this.ref !== null) {
      this.ref.off();
    }
    this.ref = firebase.database()
      .ref(`messages/${chatId}`)
      .orderByChild('timestamp');

    this.ref.on('child_added', (data) => {
      // data.val() has the content
      // data.key has the messageId
      this.setState((prevState) => {
        prevState.messages.push(data.val());
        return {messages: prevState.messages};
      });
    });
  }

  _saveMessage(message) {
    return firebase.database()
      .ref(`messages/${this.props.chatId}`)
      .push(message)
      .then(data => data.key);
  }

  _getDirection(item){
    return item.senderId == this.props.currentUser.phoneNumber ? "to" : "from";
  }

  _clearState(){
    this.state = {
      messages: []
    };
}

  componentWillMount() {
    this._subscribe(this.props.chatId);
  }

  componentWillReceiveProps(nextProps) {
    this._clearState();
    this._subscribe(nextProps.chatId);
  }

  render() {
    return (
      <div className="chat-conversation-container">
        <div className=".chat-conversation-body">
          {this.state.messages.map((item, index) => <MessageCloud key={index} message={item.body} direction={this._getDirection(item)} />)}
        </div>
        <ConversationInput onMessage={this._saveMessage.bind(this)} />
      </div>
    )
  }
}

ChatConversation.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

ChatConversation.propTypes = {
  chatId: PropTypes.string.isRequired
};

export default ChatConversation;
