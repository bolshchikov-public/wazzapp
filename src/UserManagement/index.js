import React from 'react';
import PropTypes from 'prop-types';
import './UserManagement.css';
import ProfileImage from '../ProfileImage';
import Logout from '../Logout';

const UserManagement = ({ onLogout }, { currentUser }) => {
  
}

UserManagement.contextTypes = {
  currentUser: PropTypes.object.isRequired,
};

UserManagement.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default UserManagement;
