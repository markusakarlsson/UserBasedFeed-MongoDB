const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: String,
  title: String,
  textContent: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
