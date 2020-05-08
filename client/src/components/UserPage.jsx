import React from "react";
import LogIn from "./LogIn";
import NewPost from "./NewPost";


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
        <LogIn/>
        <NewPost/>
      </div>
    );
  }
}

export default UserPage;
