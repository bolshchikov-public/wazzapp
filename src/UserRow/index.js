import React from 'react';
import PropTypes from 'prop-types';
import './UserRow.css';
import ProfileImage from '../ProfileImage';

const UserRow = ({user}) => {
  return (
    <div className="user-row">
      <ProfileImage user={user} />
      <div className="chat-item-name">
        {user.userName}
      </div>
      <div></div>
    </div>
  )
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserRow;
