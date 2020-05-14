import React from "react";
import axios from "axios";
import { Consumer } from "./context";

class NewPost extends React.Component {
  state = {
    title: "",
    textContent: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  reset = () => {
    this.setState({
      title: "",
      textContent: "",
    });
  };

  submit = (event) => {
    event.preventDefault();

    const action = {
      title: this.state.title,
      textContent: this.state.textContent,
    };

    axios({
      url: "http://localhost:3001/posts/add",
      method: "POST",
      withCredentials: "true",
      data: action,
    })
      .then(() => {
        console.log("data sent to server");
        this.reset();
      })
      .catch(() => {
        console.log("error");
      });
  };

  render() {
    return (
      <Consumer>
        {({}) => (
          <div
            style={{
              border: "1px solid black",
              height: "30vh",
              width: "25vw",
            }}
          >
            <h3>New post</h3>
            <form onSubmit={this.submit}>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Title"
              />
              <textarea
                style={{ fontFamily: "Arial" }}
                placeholder="Write your post here..."
                name="textContent"
                value={this.state.textContent}
                onChange={this.handleChange}
                id="newpost"
                rows="4"
                cols="50"
              ></textarea>
              <button className="myButton" type="submit">
                Send post
              </button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default NewPost;
