import React from "react";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

class UserPage extends React.Component {
  render() {
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
  }
}

export default UserPage;
