
import './MessageCloud.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MessageCloud = ({ direction, message }) => {
  var time = new Date(message.timestamp);
  <div className="message-cloud">
  if(direction == "from") {
    <span className="message-from">{message.body}</span>
  } else if(direction == "to") {
    <span className = "message-to">{message.body}</span>
  }
  <span className="message-timestamp">{`${time.getHours()}:${time.getMinutes()}`}</span>
  </div>
};

MessageCloud.propTypes = {
  message: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(['to', 'from']).isRequired
};

export default MessageCloud;
