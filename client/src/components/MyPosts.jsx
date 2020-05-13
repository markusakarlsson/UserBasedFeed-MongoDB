import React from "react";
import axios from "axios";

class MyPosts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getMyPosts();
  };

  getMyPosts = () => {
    axios({
      url: "http://localhost:3001/posts/getownposts",
      method: "GET",
      withCredentials: "true",
    })
      .then((response) => {
        this.setState({ posts: response.data });
        console.log("In function this.state:", this.state);
      })
      .catch(() => {
        alert("error retrieving data");
      });
  };

  deletePost = (event) => {
    let postToDelete = event.target.parentElement.dataset.id;
    console.log("POST TO DELETE: ", postToDelete);

    axios({
      url: "http://localhost:3001/posts/" + postToDelete,
      method: "DELETE",
      withCredentials: "true",
    })
      .then(() => {
        this.displayMyPosts(this.state.posts);
      })
      .catch(() => {
        alert("error deleting data");
      });
  };

  displayMyPosts = (posts) => {
    if (!posts.length) return null;
    console.log("POST IN DISPLAYMYPOSTS: ", posts);

    return posts.map((post, index) => (
      <div
        data-id={post._id}
        key={index}
        style={{ border: "1px solid black", padding: "0.5rem" }}
      >
        <h3>Username: {post.username}</h3>
        <h4>Title: {post.title}</h4>
        <p>TextContent: {post.textContent}</p>
        <i
          className="fas fa-trash-alt"
          onClick={(event) => {
            this.deletePost(event);
          }}
        ></i>
      </div>
    ));
  };

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
        {this.displayMyPosts(this.state.posts)}
      </div>
    );
  }
}

export default MyPosts;
