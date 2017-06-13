import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilteredChatList.css';
import * as firebase from 'firebase/app';
import ChatListItem from '../ChatListItem';

class FilteredChatList extends Component {
  
}

FilteredChatList.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

FilteredChatList.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default FilteredChatList;
