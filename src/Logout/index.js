import React from 'react';
import PropTypes from 'prop-types';
import './Logout.css';

const Logout = ({ onLogout }) => {
  const logout = () => {
    if (window.confirm('Are you sure?')) {
      window.localStorage.removeItem('wazzapp-user');
      onLogout();
    }
  }
  return (
    <button className="button button-reject button-small" onClick={logout}>Logout</button>
  )
}

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default Logout;
