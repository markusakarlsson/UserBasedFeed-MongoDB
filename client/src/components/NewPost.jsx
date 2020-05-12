import React from "react";
import axios from "axios";

class NewPost extends React.Component {
  state = {
    // userId: "",
    // username: "",
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

  // getUsername = () => {
  //   fetch("http://localhost:3001/users/getusername", {
  //     method: "GET",
  //     credentials: "include",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data) {
  //         console.log("There's no user");
  //       } else {
  //         this.setState({ username: data.username, userId: data.userId });
  //       }
  //     });
  // };

  submit = (event) => {
    event.preventDefault();

    const action = {
      // userId: this.state.userId,
      // username: this.state.username,
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

  // componentDidUpdate() {
  //   this.getUsername();
  // }

  render() {
    return (
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
            placeholder="Write your post here..."
            name="textContent"
            value={this.state.textContent}
            onChange={this.handleChange}
            id="newpost"
            rows="4"
            cols="50"
          ></textarea>
          <button type="submit">Send post</button>
        </form>
      </div>
    );
  }
}

export default NewPost;
