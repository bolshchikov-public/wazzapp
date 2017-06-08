import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.css';
import UserRow from '../UserRow';

class ChatListItem extends Component {
  chooseChat() {
    this.props.onSelect(this.props.user)
  }
  render() {
    return (
      <div className="chat-item-container" onClick={this.chooseChat.bind(this)}>
        <UserRow user={this.props.user} />
      </div>
    )
  }
}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func
};

export default ChatListItem;
