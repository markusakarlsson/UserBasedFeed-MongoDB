import React from "react";
import PostFeed from "./PostFeed";
import UserPage from "./UserPage";
import RegisterModal from "./RegisterModal";


class MainPage extends React.Component {
    state = {
        isOpen: false
    };


    handleRegisterClick = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

 /*    closeRegisterModal = () => {
        this.setState({ isOpen: false })
    }
 */

  render() {
    return (
      <div className="MainContainer">
        <header>
          <h1>POST FEED APP</h1>
        </header>
        {this.state.isOpen && (
            <div style={{ position: "absolute", left: "32vw", top: "30vh" }}>
          <RegisterModal />
        </div>
        )}
        <button 
        onClick={() => {this.handleRegisterClick()}}>
            Register
            </button>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PostFeed />
          <UserPage />
        </div>
      </div>
    );
  }
}

export default MainPage;
