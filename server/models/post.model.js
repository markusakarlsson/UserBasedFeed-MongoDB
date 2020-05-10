const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: moongoose.Types.objectID,
    ref: "User",
  },
  title: String,
  textContent: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
