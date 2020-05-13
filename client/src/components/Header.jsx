import React from "react";
import RegisterModal from "./RegisterModal";
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
    alert("User was successfully created!");
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

 /*  handleRegisterClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }; */


  toggleModal = () => {
    this.setState({
        showModal: !this.state.showModal
    })
    console.log("modal")
}


get modal() {
  if (this.state.showModal) {
      return (
          <Modal>
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
        </form>
      </div>
          </Modal >
      )
  }
  return undefined
}

  render() {
    return (
      <>
        <header>
          <h1>POST FEED APP</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "1rem",
            }}
          >
            <button
              onClick={this.toggleModal}
            >
              Register
            </button>
            <LogIn />
          </div>
        </header>

        {/* {this.state.isOpen && (
          <div style={{ position: "absolute", left: "32vw", top: "30vh" }}>
            <RegisterModal />
          </div>
        )} */}
        {this.modal}
      </>
    );
  }
}

export default Header;
