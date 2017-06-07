import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.css';
import ProfileImage from '../ProfileImage';

class ChatListItem extends Component {
  render() {
    return (
      <div className="chat-item-container">
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
  user: PropTypes.object.isRequired
};

export default ChatListItem;
