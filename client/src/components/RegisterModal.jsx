import React from "react";
import axios from "axios";

class RegisterModal extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handelInputChange = (event) => {
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
    })
  }

  successfullyCreatedUser = () => {
    alert("User was successfully created!")
  }

  submitRegister = (event) => {
    event.preventDefault();

    const inputValues = {
      username: this.state.username,
      password: this.state.password,
    };

    axios({
      url: "http://localhost:3001/users/add",
      method: "POST",
      data: inputValues,
    })
    .then(() => {
      console.log("data sent to server")
      this.resetInputFields();
      this.successfullyCreatedUser();
    })
    .catch(() => {
      console.log("error")
    });
  };

  render() {
    return (
      <div
        style={{
          background: "black",
          color: "white",
          height: "20rem",
          width: "30rem",
          padding: "1rem",
        }}
      >
        <h1>Register</h1>
        <form onSubmit={this.submitRegister} style={{ display: "flex", flexDirection: "column" }}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handelInputChange}
            placeholder="Enter a username"
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handelInputChange}
            placeholder="Enter a password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterModal;
