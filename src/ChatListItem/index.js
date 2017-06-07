import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.css';
import ProfileImage from '../ProfileImage';

class ChatListItem extends Component {
  chooseChat() {
    this.props.onSelect(this.props.user.phoneNumber)
  }
  render() {
    return (
      <div className="chat-item-container" onClick={this.chooseChat.bind(this)}>
        <ProfileImage user={this.props.user} />
        <div className="chat-item-name">
          {this.props.user.userName}
        </div>
        <div></div>
      </div>
    )
  }
}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default ChatListItem;
