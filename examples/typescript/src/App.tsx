import * as React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h1>
              <FontAwesomeIcon icon={faCoffee} />
          </h1>
      </div>
    );
  }
}

export default App;
