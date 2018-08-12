import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import { jsComponent as HelloFromReason } from './HelloFromReason.bs.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Starter App</h1>
        <h3>It has hot module reloading built in!</h3>
        <HelloFromReason name="Seth" />
      </div>
    )
  }
}

export default hot(module)(App)