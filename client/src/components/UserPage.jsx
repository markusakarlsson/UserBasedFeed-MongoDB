import React from "react";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";
import Context, { Consumer } from "./context";

class UserPage extends React.Component {
  static contextType = Context;


  render() {
    if (this.context.loggedInUser) {
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
      return null;
    }
  }
}

export default UserPage;
