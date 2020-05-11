import React from "react";
import axios from "axios";

class LogIn extends React.Component {
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
      password: ""
    });
  };

  successfullyLoggedIn = () => {
    alert("You were successfully logged in!")
  };

  submitLogin = (event) => {
    event.preventDefault();

    const inputValues = {
      username: this.state.username,
      password: this.state.password,
    };

    axios({
      url: "http://localhost:3001/users/login",
      method: "POST",
      data: inputValues,
    })
    .then(() => {
      console.log("data sent to server")
      this.resetInputFields();
      this.successfullyLoggedIn();
    })
    .catch(() => {
      console.log("error logging in")
      this.resetInputFields();
    });
  };

  render() {
    console.log(this.state)
    return (
      <div
        className="logInContainer"
        style={{
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "20vW",
          height: "20vh",
        }}
      >
        <form onSubmit={this.submitLogin} style={{display: "flex", flexDirection: "column"}}>
        <label>Username</label>
        <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handelLoginChange}
            placeholder="Enter a username"
            required
          />
        <label>Password</label>
        <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handelLoginChange}
            placeholder="Enter a password"
            required
          />
        <button type="submit">Login</button>
        </form>
      </div>
    );
  };
};

export default LogIn;
