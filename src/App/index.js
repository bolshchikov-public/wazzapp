// @ts-check
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import UserManagement from '../UserManagement';
import FilteredChatList from '../FilteredChatList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentChat: null
    }
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-list-container">
          <UserManagement
            currentUser={this.props.currentUser}
            onLogout={this.props.onLogout}
          />
          <FilteredChatList currentUser={this.props.currentUser}/>
        </div>
        {
          this.state.currentChat ?
            <div className="chat-conversation-container"></div> :
            <div className="chat-empty-container">
              <h1>Welcome to WazzApp</h1>
            </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default App;
