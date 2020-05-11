import React from "react";

class RegisterModal extends React.Component {
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
        <form style={{display: "flex", flexDirection: "column"}}>
        <label>Username</label>
          <input type="text" placeholder="Enter username" required />
          <label>Password</label>
          <input type="password" placeholder="Enter password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterModal;
