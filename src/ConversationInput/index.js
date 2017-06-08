import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConversationInput.css';

class ConversationInput extends Component {

  _onEnter(event) {
    if (event.key === 'Enter') {
      this.props.onMessage(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
      <div className="conversation-input-container">
        <input type="text" placeholder="Type a message" onKeyPress={this._onEnter.bind(this)} />
      </div>
    )
  }
}

ConversationInput.propTypes = {
  onMessage: PropTypes.func.isRequired
};

export default ConversationInput;
