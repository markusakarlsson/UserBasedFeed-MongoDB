import React from "react";
import axios from "axios";


const Context = React.createContext()


export class Provider extends React.Component { 
  constructor() {
    super()
     this.state = {
       posts: [],
       getAllPosts: this.getAllPosts,
       displayPosts: this.displayPosts,
       
      }
  }


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
      console.log("hej från context")
  };

  displayPosts = () => {
    if (!this.state.posts.length) return null;

    console.log("hej från display posts i contexten")
    return this.state.posts.map((post, index) => (
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
          <i className="fas fa-user-circle"></i>
          {post.username}
        </h3>
        <h4 style={{ margin: "0" }}>{post.title}</h4>
        <p>{post.textContent}</p>
      </div>
    ));
  };



    render() {
        return (
          <Context.Provider value={this.state}>
            {this.props.children}
          </Context.Provider>
        );
      }
}

export default Context;

export const Consumer = Context.Consumer; 