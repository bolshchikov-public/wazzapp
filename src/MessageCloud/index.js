// @ts-check
import './MessageCloud.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MessageCloud = ({ direction, message }) => {

};

MessageCloud.propTypes = {
  message: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(['to', 'from']).isRequired
};

export default MessageCloud;
