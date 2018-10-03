import React, { Component } from "react";
import { hot } from "react-hot-loader";

import { jsComponent as HelloFromReason } from "./HelloFromReason.bs.js";

class App extends Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Welcome to My Starter App</h1>
        <h3>It has hot module reloading built in!</h3>
        <label htmlFor="name">
          Name:{' '}
          <input
            id="name"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        {<HelloFromReason name={this.state.value} />}
      </div>
    );
  }
}

export default hot(module)(App);
