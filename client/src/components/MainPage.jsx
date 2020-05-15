import React from "react";
import PostFeed from "./PostFeed";
import UserPage from "./UserPage";
import Header from "./Header";
import Context from "./context";
class MainPage extends React.Component {
  static contextType = Context;


  componentDidMount = () => {
    this.context.authenticated();
  } 


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
