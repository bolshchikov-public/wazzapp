import React from 'react';
import PropTypes from 'prop-types';
import './ProfileImage.css';

const ProfileImage = ({user}) => {
  return (
    <div className="profile-image-container">
      <img src={user.imageData} alt={user.userName}/>
    </div>
  );
};

ProfileImage.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProfileImage;
