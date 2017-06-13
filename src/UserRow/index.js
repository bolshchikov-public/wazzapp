import React from 'react';
import PropTypes from 'prop-types';
import './UserRow.css';
import ProfileImage from '../ProfileImage';

const UserRow = ({user}) => {
    return (
        <div class="user-row">
            <ProfileImage user={user}/>
            <label>{user}</label>
        </div>
    )
}

UserRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserRow;
