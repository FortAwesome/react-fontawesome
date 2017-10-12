import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <FontAwesomeIcon icon={["fa","coffee"]} />
        </h1>
      </div>
    );
  }
}

export default App;
