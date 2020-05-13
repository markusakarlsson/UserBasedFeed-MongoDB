import React from "react";
import PostFeed from "./PostFeed";
import UserPage from "./UserPage";
import Header from "./Header";

class MainPage extends React.Component {


  /*    closeRegisterModal = () => {
        this.setState({ isOpen: false })
    }
    */

  render() {
    return (
      <div className="MainContainer">
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <PostFeed />
          <UserPage />
        </div>
      </div>
    );
  }
}

export default MainPage;
