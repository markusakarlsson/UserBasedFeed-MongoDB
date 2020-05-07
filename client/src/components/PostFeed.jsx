import React from "react";
//import axios from "axios";


class PostFeed extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }


  getAllPosts() {
    fetch('http://localhost:3000/posts/')
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      console.log(posts);
    });
  };





    render() {
      return (
          <div className="postFeedContainer" style={{ border: "1px solid black", height: "100vh", width: "50vw"}}>
            <h2>Post feed</h2>
            <div>{this.getAllPosts()}</div>
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
