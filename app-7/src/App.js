import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTask from "./component/AddTask";
import Display from "./component/Display";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };

    this.addTaskOnClick = this.addTaskOnClick.bind(this);
  }

  addTaskOnClick(val) {
    this.setState({ list: [...this.state.list, val] });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>APPP SEEVEN!!</h2>
        </div>
        <AddTask add={this.addTaskOnClick} />
        <Display list={this.state.list} />
      </div>
    );
  }
}

export default App;
