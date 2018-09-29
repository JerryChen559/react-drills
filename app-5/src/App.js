import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  //img = http://tadalafilforsale.net/data/media/35/55607397.jpg
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Image
          myImage={"http://tadalafilforsale.net/data/media/35/55607397.jpg"}
        />
      </div>
    );
  }
}

export default App;
