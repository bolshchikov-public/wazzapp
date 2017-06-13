import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Logout.css';

class Logout extends Component {
  confirmLogout() {
    const res = window.confirm("Are you sure you want to logout?");
    if(res) {
      this.props.onLogout();
      window.localStorage.removeItem('wazzapp-user');
    }
  }

  render() {
    return (
      <button onClick={this.confirmLogout.bind(this)}>Logout</button>
    );
  }
}

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired
}

export default Logout;
