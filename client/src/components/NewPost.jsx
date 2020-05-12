import React from "react";
import axios from "axios";

class NewPost extends React.Component {
  state = {
    username: "",
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
      username: this.state.username,
      title: this.state.title,
      textContent: this.state.textContent,
    };

    fetch("http://localhost:3001/users/getusername", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => this.setState);

    // axios
    //   .get("http://localhost:3001/users/getusername")
    //   .then((response) => {
    //     this.setState({ username: response.data });
    //   })
    //   .catch(() => {
    //     alert("error retrieving data");
    //   });

    axios({
      url: "http://localhost:3001/posts/add",
      method: "POST",
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
