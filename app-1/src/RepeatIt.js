import React, { Component } from "react";

class RepeatIt extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type Something"
          onChange={this.props.onChange}
        />
        <br />
        {this.props.str}
      </div>
    );
  }
}

export default RepeatIt;
