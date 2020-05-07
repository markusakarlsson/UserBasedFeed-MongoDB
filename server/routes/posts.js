// Lägg till express och gör router get, post, put, delete
const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const textContent = req.body.textContent;

  const newPost = new Post({ username, title, textContent });

  newPost
    .save()
    .then(() => res.json("Post posted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

/* router.route("/update").put((req, res) => {
 
}); */

module.exports = router;
