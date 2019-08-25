import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'

import { fad } from '@fortawesome/pro-duotone-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

class App extends Component {
  render() {
    return (
      <div id="app">
        <main className="w-100 min-vh-100 bg-gray8 white sans-serif pa6 flex flex-column justify-center items-center">
          <div className="mw8 center overflow-hidden">
            <h2 className="tc ttu tracked3 b f2 mt0 mb2 teal0 o-30">
              react-fontawesome
            </h2>

            <FontAwesomeIcon
              icon={['fad', 'stroopwafel']}
              size="4x"
              style={{ '--fa-primary-color': 'red' }}
            />

            <ul className="list ma0 pa0 flex flex-row flex-wrap teal4">
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon icon={['fab', 'font-awesome']} size="4x" />
              </li>
              <li className="pv3 ph2 ma0 link grow">
                <FontAwesomeIcon icon={faCoffee} size="4x" />
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
