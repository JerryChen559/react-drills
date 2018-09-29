import React, { Component } from "react";

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
    this.addTaskOnClick = this.addTaskOnClick.bind(this);
  }

  inputHandler(val) {
    this.setState({ task: val });
  }

  addTaskOnClick() {
    this.props.add(this.state.task);
    this.setState({ task: "" });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="add a task!"
          value={this.state.task}
          onChange={e => this.inputHandler(e.target.value)}
        />

        <button onClick={() => this.addTaskOnClick()}>Add</button>
      </div>
    );
  }
}

export default AddTask;
