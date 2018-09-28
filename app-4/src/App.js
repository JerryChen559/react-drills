import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(key, val) {
    //console.log("key,val:", key, val, {[key] : val})
    this.setState({ [key]: val });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Login
          inputHandler={this.inputHandler}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}

export default App;
