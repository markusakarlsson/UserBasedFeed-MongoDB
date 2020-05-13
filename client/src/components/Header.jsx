import React from "react";
import RegisterModal from "./RegisterModal";
import LogIn from "./LogIn";

class Header extends React.Component {
  state = {
    isOpen: false,
  };
  handleRegisterClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
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
                this.handleRegisterClick();
              }}
            >
              New user
            </button>
          </div>
        </header>

        {this.state.isOpen && (
          <div style={{ position: "absolute", left: "32vw", top: "30vh" }}>
            <RegisterModal />
          </div>
        )}
      </>
    );
  }
}

export default Header;
