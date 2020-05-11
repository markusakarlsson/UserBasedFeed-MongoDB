import React from "react";

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


  render() {
    console.log(this.state)
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
        <form style={{ display: "flex", flexDirection: "column" }}>
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
