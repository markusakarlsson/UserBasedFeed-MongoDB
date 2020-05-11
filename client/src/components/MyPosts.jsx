import React from "react";

function MyPosts() {
  return (
    <div
      className="myPostsContainer"
      style={{
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "40vh",
      }}
    >
      <h3>My Posts</h3>
    </div>
  );
}

export default MyPosts;
