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
    this.state={
      messages: []
    };
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
    return item.sender == this.props.currentUser.key ? "to" : "from";
  }

  componentWillMount() {
    this._subscribe(this.props.chatId);
  }

  render() {
    return (
      <div className="chat-conversation-container">
        {this.state.messages.map((item, index) => <MessageCloud key={index} message={item.body} direction={this._getDirection(item)} />)}
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
