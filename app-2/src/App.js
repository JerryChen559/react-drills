import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arr: ["12", "str2", "a;lsf", "testtest", "ICE-CREAM"]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h2>{this.state.arr}</h2>
      </div>
    );
  }
}

export default App;
