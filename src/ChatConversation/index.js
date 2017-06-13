// @ts-check
import './ChatConversation.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import MessageCloud from '../MessageCloud';
import ConversationInput from '../ConversationInput';

class ChatConversation extends Component {

}

ChatConversation.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

ChatConversation.propTypes = {
  chatId: PropTypes.string.isRequired
};

export default ChatConversation;
