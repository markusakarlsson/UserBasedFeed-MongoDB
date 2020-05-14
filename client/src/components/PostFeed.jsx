import React from "react";
import axios from "axios";
import Context, { Consumer } from "./context";

class PostFeed extends React.Component {
  static contextType = Context;

  /* state = {
    posts: [],
  }; */

  componentDidMount = () => {
    this.context.getAllPosts(); 

  }; 


  render() {
    return (
      <Consumer>
        {({}) => (
      <div
        className="postFeedContainer"
        style={{
          width: "50vw",
          backgroundColor: "#d8115a",
        }}
      >
        <h2 style={{ color: "white" }}>Post feed</h2>
        {this.context.displayPosts()}
       {/* {this.displayPosts(this.state.posts)} */}
      </div>
        )}
      </Consumer>
    );
  }
}

export default PostFeed;
