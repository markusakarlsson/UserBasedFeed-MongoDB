import React from "react";
import axios from "axios";

class PostFeed extends React.Component {

  state = {
    posts: []
  }

  componentDidMount = () => {
    this.getAllPosts()
    console.log(this.state.posts)
  }


  getAllPosts = () => {
    axios.get('http://localhost:3001/posts/')
    .then((response) => {
    const post = response;
    this.setState({ posts: post });
      console.log("data has been received");
    })
    .catch(() => {
      alert("error retrieving data")
    })
  };





    render() {
      return (
          <div className="postFeedContainer" style={{ border: "1px solid black", height: "100vh", width: "50vw"}}>
            <h2>Post feed</h2>
           {/*  <div>{this.getAllPosts()}</div> */}
           {/*  <div>
            {this.state.lists.map((list) => {
            <div key={list.username}>
              <pre>
                <h1>{JSON.stringify(list)}</h1>
              </pre>
            </div>
        })}
            </div> */}
          </div>
        );
    }

    


}; 

export default PostFeed;
