import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.css';
import UserRow from '../UserRow';

class ChatListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li class="chat-item-container" onClick={this.props.onSelect}>
        <UserRow user={this.props.user} />
      </li>
    );
  }
}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func
};

export default ChatListItem;
