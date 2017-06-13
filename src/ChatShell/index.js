// @ts-check
import React from 'react';
import './ChatShell.css';
import PropTypes from 'prop-types';
import UserRow from '../UserRow';
import ChatConversation from '../ChatConversation';

const ChatShell = ({opponent, chatId}) => {

}

ChatShell.propTypes = {
  opponent: PropTypes.object.isRequired,
  chatId: PropTypes.string.isRequired
};

export default ChatShell;
