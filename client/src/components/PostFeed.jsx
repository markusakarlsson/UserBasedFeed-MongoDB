import React from "react";
import axios from "axios";

class PostFeed extends React.Component {
  state = {
    posts: [],
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
      <div
        key={index}
        style={{
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "0 3rem 1rem 3rem",
          padding: "0.5rem",
        }}
      >
        <h3 style={{ textAlign: "left", margin: "0.5rem" }}>
          <i class="fas fa-user-circle"></i>
          {post.username}
        </h3>
        <h4 style={{ margin: "0" }}>{post.title}</h4>
        <p>{post.textContent}</p>
      </div>
    ));
  };

  render() {
    return (
      <div
        className="postFeedContainer"
        style={{
          height: "100vh",
          width: "50vw",
          backgroundColor: "#d8115a",
        }}
      >
        <h2 style={{ color: "white" }}>Post feed</h2>
        {this.displayPosts(this.state.posts)}
      </div>
    );
  }
}

export default PostFeed;
