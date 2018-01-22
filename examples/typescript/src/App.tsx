import * as React from 'react';

// Importing types from the API library along with other exports
import { IconLookup,
    IconDefinition,
    findIconDefinition,
    library } from '@fortawesome/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import './App.css';

// We're only adding faCoffee to the library so we can look it up.
// And we're only doing that to demonstrate how the API types might be used.
// This is not a realistic scenario. You wouldn't normally do things in such a round about way.
// It's really just to demonstrate use of the types.
library.add(faCoffee);
const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' };
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

export class App extends React.Component {
  render() {
    return (
      <div className="App">
          <h1>
              <FontAwesomeIcon
                  icon={coffeeIconDefinition}
              />
          </h1>
      </div>
    );
  }
}

export default App;
