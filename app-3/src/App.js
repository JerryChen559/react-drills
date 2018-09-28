import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      arrayOfWords: [
        "deer",
        "bear",
        "chair",
        "care",
        "mouse",
        "coca-cola",
        "test",
        "test2"
      ]
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    let wordsOutput = this.state.arrayOfWords
      .filter(match => match.includes(this.state.input))
      .map((word, i) => <div key={i}>{word}</div>);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input type="text" onChange={this.onChange} />
        {wordsOutput}
      </div>
    );
  }
}

export default App;
