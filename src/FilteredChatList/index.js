import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilteredChatList.css';
import * as firebase from 'firebase/app';
import ChatListItem from '../ChatListItem';

class FilteredChatList extends Component {
  constructor() {
    super();
    this.state = null;
  }

  componentWillMount() {
    firebase.database().ref('/users').on('value', (snapshop) => {
      this.setState(snapshop.val());
    });
  }

  renderList() {
    return (
      <div className="filtered-chat-list-container">
        {
          Object
            .keys(this.state)
            .filter(phoneNumber => phoneNumber !== this.context.currentUser.phoneNumber)
            .map(phoneNumber => <ChatListItem key={phoneNumber} user={this.state[phoneNumber]} onSelect={this.props.onSelect}/>)
        }
      </div>
    );
  }
  render() {
    return (this.state) ? this.renderList() : null;
  }
}

FilteredChatList.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

FilteredChatList.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default FilteredChatList;
