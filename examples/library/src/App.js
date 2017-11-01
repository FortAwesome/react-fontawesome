import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './App.css';

fontawesome.library.add(brands, faCoffee, faCog, faSpinner, faQuoteLeft, faSquare, faCheckSquare)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <FontAwesomeIcon icon={["fab", "font-awesome"]} />
          <FontAwesomeIcon icon={["fas", "coffee"]} />
          <FontAwesomeIcon icon={["fas", "cog"]} spin fixedWidth={false} />
          <FontAwesomeIcon icon={["fab", "fort-awesome"]} size="4x" />
          <FontAwesomeIcon icon={["fas", "spinner"]} pulse fixedWidth />
          <FontAwesomeIcon icon={["fab", "fort-awesome"]} rotation={90} />
          <FontAwesomeIcon icon={["fab", "internet-explorer"]} flip="both" />
        </h1>
        <div>
          <p>
            <FontAwesomeIcon icon={["fas", "quote-left"]} size="2x" border pull="left" />...tomorrow we
            will run faster, stretch out our arms farther...And then one fine morning&mdash; So we beat on, boats
            against the current, borne back ceaselessly into the past.
          </p>
        </div>
        <div>
          <ul className="fa-ul">
            <li><FontAwesomeIcon icon={["fas", "check-square"]} listItem />List icons</li>
            <li><FontAwesomeIcon icon={["fas", "check-square"]} listItem />can be used</li>
            <li><FontAwesomeIcon icon={["fas", "square"]} listItem />as bullets</li>
            <li><FontAwesomeIcon icon={["fas", "square"]} listItem />in lists</li>
          </ul>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={["fab", "font-awesome"]} transform="grow-40 left-4 rotate-15" />
          </span>
          <span style={{paddingLeft: '50px'}}>
            <FontAwesomeIcon icon={["fab", "font-awesome"]} transform={{ flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 }} />
          </span>
        </div>
      </div>
    );
  }
}

export default App;
