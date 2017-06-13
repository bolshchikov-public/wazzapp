import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ConversationInput.css';

class ConversationInput extends Component {
  
  _onPress(event) {
    if(event.key === "Enter") {
      this.props.onMessage({value: event.target.value});
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="conversation-input-container">
        <input type="text" placeholder="Write a message" onKeyPress={this._onPress.bind(this)} />
      </div>
    )
  }
}

ConversationInput.propTypes = {
  onMessage: PropTypes.func.isRequired
};

export default ConversationInput;
