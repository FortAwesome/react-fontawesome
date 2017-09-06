import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './App.css';

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <FontAwesomeIcon pack="fab" name="font-awesome" />
          <FontAwesomeIcon pack="fas" name="coffee" />
          <FontAwesomeIcon pack="fas" name="cog" spin fixed-width={false} />
          <FontAwesomeIcon pack="fab" name="fort-awesome" size="4x" />
          <FontAwesomeIcon pack="fas" name="spinner" pulse fixed-width />
          <FontAwesomeIcon pack="fab" name="fort-awesome" rotation={90} />
          <FontAwesomeIcon pack="fab" name="internet-explorer" flip="both" />
        </h1>
        <div>
          <p>
            <FontAwesomeIcon pack="fas" name="quote-left" size="2x" border pull="left" />...tomorrow we 
            will run faster, stretch out our arms farther...And then one fine morning&mdash; So we beat on, boats 
            against the current, borne back ceaselessly into the past.
          </p>
        </div>
        <div>
          <ul className="fa-ul">
            <li><FontAwesomeIcon pack="fas" name="check-square" list-item />List icons</li>
            <li><FontAwesomeIcon pack="fas" name="check-square" list-item />can be used</li>
            <li><FontAwesomeIcon pack="fas" name="square" list-item />as bullets</li>
            <li><FontAwesomeIcon pack="fas" name="square" list-item />in lists</li>
          </ul>
        </div>
        <div>
          <span>
            <FontAwesomeIcon pack="fab" name="font-awesome" transform="grow-40 left-4 rotate-15" />
          </span>
          <span style={{paddingLeft: '50px'}}>
            <FontAwesomeIcon pack="fab" name="font-awesome" transform={{ flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 }} />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
