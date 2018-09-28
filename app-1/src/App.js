import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RepeatIt from "./RepeatIt";

class App extends Component {
  constructor() {
    super();

    this.state = {
      str: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ str: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <RepeatIt onChange={this.onChange} str={this.state.str} />
      </div>
    );
  }
}

export default App;
