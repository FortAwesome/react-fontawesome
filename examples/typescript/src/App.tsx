import * as React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee, faCog } from '@fortawesome/fontawesome-free-solid';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h1>
              <FontAwesomeIcon
                  icon={faCog}
                  style={{backgroundColor: 'lightgrey'}}
                  mask={faCoffee}
                  transform="shrink-9 up-1 left-1" />
          </h1>
      </div>
    );
  }
}

export default App;
