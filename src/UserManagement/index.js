import React from 'react';
import PropTypes from 'prop-types';
import './UserManagement.css';
import ProfileImage from '../ProfileImage';
import Logout from '../Logout';

const UserManagement = ({currentUser, onLogout}) => {
  return (
    <div className="user-management-container">
      <ProfileImage user={currentUser}/>
      <Logout onLogout={onLogout}/>
    </div>
  )
}

UserManagement.propTypes = {
  currentUser: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired
}

export default UserManagement;
