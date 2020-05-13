import React from "react";
import NewPost from "./NewPost";
import MyPosts from "./MyPosts";

class UserPage extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          height: "100vh",
          width: "50vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>User page</h2>
        <NewPost />
        <MyPosts />
      </div>
    );
  }
}

export default UserPage;
