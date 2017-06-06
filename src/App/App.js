// @ts-check
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        This is chat
        User: {JSON.stringify(this.props.currentUser)}
      </div>
    );
  }
}

export default App;
