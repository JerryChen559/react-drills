import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      newtask: ""
    };
  }

  inputHandler(key, val) {
    this.setState({ [key]: val });
  }

  addNewTaskButton() {
    this.setState({
      tasks: [...this.state.tasks, this.state.newtask],
      newtask: ""
    });
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <h1>My to-do list:</h1>

        <input
          type="text"
          value={this.state.newtask}
          placeholder="Enter a new tast!"
          onChange={e => this.inputHandler("newtask", e.target.value)}
        />

        <button onClick={() => this.addNewTaskButton()}>Add</button>

        <Todo tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
