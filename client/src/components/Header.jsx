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
              borderRadius: "1rem",
              backgroundColor: "#61082b",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <button style={{position: "absolute", left: "85%", top: "1rem"}} className="myButton" onClick={this.toggleModal}>Close</button>
            <h1>Register</h1>
            <form
              onSubmit={this.submitRegister}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <label style={{margin: "1rem"}}>Username</label>
              <input
                style={{
                  padding: "0.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  width: "30%",
                }}
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handelInputChange}
                placeholder="Enter a username"
                required
              />
              <label style={{margin: "1rem"}}>Password</label>
              <input
                style={{
                  padding: "0.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  width: "30%",
                }}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handelInputChange}
                placeholder="Enter a password"
                required
              />
              <div>
              <button style={{margin: "2rem"}} className="myButton" type="submit">Register</button>
              </div>
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
