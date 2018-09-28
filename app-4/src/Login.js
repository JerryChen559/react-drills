import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  onSubmit() {
    let { username, password } = this.props;
    alert(`Username: ${username} Password: ${password}`);
  }

  render() {
    return (
      <div>
        <input
          value={this.props.username}
          input={this.props.username}
          type="text"
          placeholder="username"
          onChange={e => this.props.inputHandler("username", e.target.value)}
        />

        <input
          value={this.props.password}
          input={this.props.password}
          type="text"
          placeholder="password"
          onChange={e => this.props.inputHandler("password", e.target.value)}
        />

        <button onClick={() => this.onSubmit()}>Login</button>
      </div>
    );
  }
}

export default Login;
