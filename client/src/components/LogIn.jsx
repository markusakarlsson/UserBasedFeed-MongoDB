import React from "react";
import Context from "./context";

class LogIn extends React.Component {
  static contextType = Context;


  state = {
    username: "",
    password: "",
  };

  handelLoginChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  resetInputFields = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  successfullyLoggedIn = () => {
    alert("You were successfully logged in!");
  };

  failedLoggingIn = () => {
    alert("You are not authorized!");
  };

  alreadyLoggedIn = () => {
    alert("Ops, you're already logged in!");
  };


  submitLogin = (event) => {
    event.preventDefault();


    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    }).then((data) => {
      if (data.status === 200) {
        this.context.authenticated();
        this.successfullyLoggedIn();
        this.context.getMyPosts();
      } else if (data.status === 401) {
        this.failedLoggingIn();
      } else if (data.status === 422) {
        this.alreadyLoggedIn();
      }
    });
    this.resetInputFields();
  };


  render() {
    return (
      <div
      className="logInContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      >
        <form
          onSubmit={this.submitLogin}
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "28rem",
          }}
        >
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handelLoginChange}
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handelLoginChange}
            placeholder="Password"
            required
          />
          <button className="myButton" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
