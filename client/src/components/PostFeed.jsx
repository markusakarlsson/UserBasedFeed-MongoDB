import React from "react";
import axios from "axios";

class PostFeed extends React.Component {
  state = {
    posts: []
  };

  componentDidMount = () => {
    this.getAllPosts();
  };

 

  getAllPosts = () => {
    axios
      .get("http://localhost:3001/posts/")
      .then((response) => {
        this.setState({ posts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };


  displayPosts = (posts) => {
    
    if (!posts.length) return null;
    
    return posts.map((post, index) => (
        <div key={index} style={{border: "1px solid black", padding: "0.5rem"}}>
          <h3>Username: {post.username}</h3>
          <h4>Title: {post.title}</h4>
          <p>TextContent: {post.textContent}</p>
        </div>
    ));
  };

  render() { 
    return (
      <div
      className="postFeedContainer"
        style={{ border: "1px solid black", height: "100vh", width: "50vw" }}
      >
        <h2>Post feed</h2>
        {this.displayPosts(this.state.posts)}
      </div>
    );
  }
}

export default PostFeed;
