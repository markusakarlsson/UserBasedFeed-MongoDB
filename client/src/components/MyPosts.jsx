import React from "react";
import Context from "./context";

class MyPosts extends React.Component {
  static contextType = Context;

  componentDidMount = () => {
   this.context.getMyPosts(); 
  }; 
 
  render() {
    return (
          <>
            <div
              className="myPostsContainer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                height: "40vh"
              }}
            >
              <h3>My Posts</h3>
               {this.context.displayMyPosts()}
            </div>
          </>
    );
  }
}

export default MyPosts;
