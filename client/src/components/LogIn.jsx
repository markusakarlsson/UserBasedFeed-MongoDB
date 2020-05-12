import React from "react";

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
      console.log("Status: ", data.status);
      if (data.status === 200) {
        console.log("Logged in successfully");
        this.successfullyLoggedIn();
      } else if (data.status === 401) {
        console.log("Error logging in");
        this.failedLoggingIn();
      } else if (data.status === 422) {
        console.log("Already logged in");
        this.alreadyLoggedIn();
      }
    });
    this.resetInputFields();
  };

  render() {
    console.log(this.state);
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
        <form
          onSubmit={this.submitLogin}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
  }
}

export default LogIn;
