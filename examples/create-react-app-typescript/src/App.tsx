import * as React from 'react'

// Importing types from the API library along with other exports
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library
} from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  fad,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
)

// We're only adding faCoffee to the library so we can look it up.
// And we're only doing that to demonstrate how the API types might be used.
// This is not a realistic scenario. You wouldn't normally do things in such a round about way.
// It's really just to demonstrate use of the types.
library.add(faCoffee)
const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)

export class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className="w-100 min-vh-100 bg-gray8 white sans-serif pa6 flex flex-column justify-center items-center">
          <div className="mw8 center overflow-hidden">
            <h2 className="tc ttu tracked3 b f2 mt0 mb2 teal0 o-30">
              react-fontawesome (TypeScript edition)
            </h2>

            <ul className="list ma0 pa0 flex flex-row flex-wrap teal4">
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon icon={['fab', 'font-awesome']} size="4x" />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon icon={coffeeIconDefinition} size="4x" />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon icon={['fad', 'stroopwafel']} size="4x" />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fas', 'cog']}
                  spin
                  fixedWidth={false}
                  size="4x"
                />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fas', 'spinner']}
                  pulse
                  fixedWidth
                  size="4x"
                />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fab', 'fort-awesome']}
                  rotation={90}
                  size="4x"
                />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fab', 'internet-explorer']}
                  flip="both"
                  size="4x"
                />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fab', 'fort-awesome']}
                  inverse
                  size="4x"
                />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon
                  icon={['fab', 'font-awesome']}
                  size="4x"
                  transform="left-1 rotate-15"
                />
              </li>
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default App
