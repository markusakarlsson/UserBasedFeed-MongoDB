import React from "react";

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
  [name]: value
});
};

  render() {
    console.log("State:", this.state)
    return (
      <div
        style={{
          border: "1px solid black",
          height: "30vh",
          width: "25vw",
        }}
      >
        <h3>New post</h3>
        <form>
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
