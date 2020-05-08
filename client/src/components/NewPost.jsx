import React from "react";

function NewPost() {
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
        <input type="text" placeholder="Title" />
        <textarea
          placeholder="Write your post here..."
          id="newpost"
          rows="4"
          cols="50"
        ></textarea>
        <button type="submit">Send post</button>
      </form>
    </div>
  );
}

export default NewPost;
