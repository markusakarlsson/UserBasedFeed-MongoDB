import React from "react";
import Context, { Consumer } from "./context";

class PostFeed extends React.Component {
  static contextType = Context;

  componentDidMount = () => {
    this.context.getAllPosts(); 

  }; 


  render() {
    return (
      <Consumer>
        {() => (
      <div
        className="postFeedContainer"
        style={{
          width: "50vw",
          minHeight: "86vh",
          backgroundColor: "#d8115a",
        }}
      >
        <h2 style={{ color: "white" }}>Post feed</h2>
        {this.context.displayPosts()}
      </div>
        )}
      </Consumer>
    );
  }
}

export default PostFeed;
