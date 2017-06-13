import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatListItem.css';
import UserRow from '../UserRow';

class ChatListItem extends Component {

}

ChatListItem.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func
};

export default ChatListItem;
