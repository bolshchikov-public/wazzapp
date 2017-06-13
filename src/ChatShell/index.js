// @ts-check
import React from 'react';
import './ChatShell.css';
import PropTypes from 'prop-types';
import UserRow from '../UserRow';
import ChatConversation from '../ChatConversation';

const ChatShell = ({opponent, chatId}) => {
return (
      <div className="chat-container-wrapper">
        <div className="chat-container-header">
      <UserRow user={opponent}/>
    </div>
      <ChatConversation chat={chatId}/>
    </div>
  )
}

ChatShell.propTypes = {
  opponent: PropTypes.object.isRequired,
  chatId: PropTypes.string.isRequired
};

export default ChatShell;
