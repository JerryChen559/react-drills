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
    let words = this.state.arr.map(word => <div>{word}</div>);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {words}
      </div>
    );
  }
}

export default App;
