import React from "react";
/* import axios from "axios"; */

class MyPosts extends React.Component {

  /* state = {
    posts: []
  };

  componentDidMount = () => {
    this.getMyPosts();
  };

  getMyPosts = () => {
    axios
      .get("http://localhost:3001/posts/getownposts")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  displayMyPosts = (posts) => {
    
    if (!posts.length) return null;
    
    return posts.map((post, index) => (
        <div key={index} style={{border: "1px solid black", padding: "0.5rem"}}>
          <h3>Username: {post.username}</h3>
          <h4>Title: {post.title}</h4>
          <p>TextContent: {post.textContent}</p>
        </div>
    ));
  }; */


  render() {
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
       {/*  {this.displayMyPosts(this.state.posts)} */}
      </div>
    );
  };
};

export default MyPosts;
