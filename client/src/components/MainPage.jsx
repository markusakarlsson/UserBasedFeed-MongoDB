import React from "react";
import PostFeed from "./PostFeed";
import UserPage from "./UserPage";
import Header from "./Header";
import axios from "axios";
class MainPage extends React.Component {
  /* state = {
    loggedInUser: false,
  }

  componentDidMount = () => {
    this.isLoggedIn()

  }


  isLoggedIn = () => {
    axios({
      url: "http://localhost:3001/users/authenticate",
      method: "GET",
      withCredentials: "true",
    })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ loggedInUser: true });
          console.log(this.state)
        }
      })
      .catch(() => {
        alert("error retrieving data");
      });
      console.log("In main page this.state:", this.state);
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
