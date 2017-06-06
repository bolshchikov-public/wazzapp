// @ts-check
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentChat: null
    }
  }

  render() {
    return (
      <div className="chat-container">
        <div className="chat-list-container"></div>
        {
          this.state.currentChat ?
            <div className="chat-conversation-container"></div> :
            <div className="chat-empty-container">
              <h1>Welcome to WazzApp</h1>
            </div>
        }
      </div>
    );
  }
}

export default App;
