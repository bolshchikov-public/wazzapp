import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilteredChatList.css';
import * as firebase from 'firebase/app';
import ChatListItem from '../ChatListItem';

class FilteredChatList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    firebase.database().ref('/users').on('value', (snapshop) => {
      this.setState({users: snapshop.val()});
    });
  }

  render() {
    return (
      <ul class="filtered-chat-list-container">
        {this.users.filter((user) => {return user != this.context.currentUser})
                   .map((user) => 
                          {<ChatListItem key={user.phoneNumber}
                                         user={user} 
                                         onSelect={this.props.onSelect} />})}
      </ul>
    );
  }
}

FilteredChatList.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

FilteredChatList.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default FilteredChatList;
