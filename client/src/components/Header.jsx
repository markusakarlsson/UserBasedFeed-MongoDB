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
              onClick={() => {
                this.handleRegisterClick();
              }}
            >
              Register
            </button>
            <LogIn />
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
