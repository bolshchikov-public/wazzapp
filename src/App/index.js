// @ts-check
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import * as firebase from 'firebase/app';
import ChatShell from '../ChatShell';
import UserManagement from '../UserManagement';
import FilteredChatList from '../FilteredChatList';

class App extends Component {

}

App.contextTypes = {
  currentUser: PropTypes.object.isRequired
};

App.propTypes = {
  onLogout: PropTypes.func.isRequired
};

export default App;
