// @ts-check
import './MessageCloud.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MessageCloud = ({ direction, message }) => {

  const toHourMinutesFormat = timestamp => {
    var date = new Date(timestamp),
      hours = date.getHours(),
      minutes = date.getMinutes();
    return ('0' + hours).slice(-2) + ':' + ('0' + minutes).slice(-2);
  };

  const messageCloudClass = classNames('message-cloud', {
    'message-from': direction === 'from',
    'message-to': direction === 'to'
  });

  return (
    <div className={messageCloudClass}>
      {message.body}
      <span className="message-timestamp">{toHourMinutesFormat(message.timestamp)}</span>
    </div>
  )
};

MessageCloud.propTypes = {
  message: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(['to', 'from']).isRequired
};

export default MessageCloud;
