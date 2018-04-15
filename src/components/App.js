import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to My Starter App</h1>
        <h3>It has hot module reloading built in!</h3>
      </div>
    )
  }
}

export default hot(module)(App)