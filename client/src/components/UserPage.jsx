import React from "react";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";
import Context from "./context";

class UserPage extends React.Component {
  static contextType = Context;


  render() {
    if (this.context.isLoggedIn) {
      return (
        <div
          style={{
            height: "100vh",
            width: "50vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <NewPost />
          <MyPosts />
        </div>
      );
    } else {
      return(
        <div style={{display: "flex", justifyContent: "center", width: "50vw", minHeight: "86vh"}}>
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#61082b",
              borderRadius: "1rem",
              height: "20vh",
              width: "25vw",
              color: "white",
              padding: "1rem",
              fontSize: "14pt"
            }}
          >
            <h1>Welcome!</h1>
            <h4>Register a new user or sign in <br/> to start posting.</h4>
          </div>
          </div>
      )
    }
  }
}

export default UserPage;
