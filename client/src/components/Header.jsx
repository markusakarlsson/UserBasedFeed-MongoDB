import React from "react";
import LogIn from "./LogIn";
import Modal from "./Modal";
import axios from "axios";

class Header extends React.Component {
  state = {
    showModal: false,
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
      password: "",
    });
  };

  successfullyCreatedUser = () => {
    alert("You were successfully registered!");
  };

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
        console.log("data sent to server");
        this.resetInputFields();
        this.successfullyCreatedUser();
      })
      .catch(() => {
        alert("Username already taken, choose another one.");
      });
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    console.log("modal");
  };

  get modal() {
    if (this.state.showModal) {
      return (
        <Modal>
          <div
            style={{
              zIndex: 1,
              position: "absolute",
              top: "25%",
              left: "25%",
              background: "black",
              color: "white",
              height: "20rem",
              width: "30rem",
              padding: "1rem",
            }}
          >
            <h1>Register</h1>
            <form
              onSubmit={this.submitRegister}
              style={{ display: "flex", flexDirection: "column" }}
            >
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
              <button onClick={this.toggleModal}>Close</button>
            </form>
          </div>
        </Modal>
      );
    }
    return undefined;
  }

  render() {
    return (
      <>
        <header style={{ padding: "1rem", backgroundColor: "#61082b" }}>
          <h1 style={{ margin: "0 0 1rem 0", color: "white" }}>
            POST FEED APP
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <LogIn />
            <button
              className="myButton"
              onClick={() => {
                this.toggleModal();
              }}
            >
              New user
            </button>
          </div>
        </header>
        {this.modal}
      </>
    );
  }
}

export default Header;
