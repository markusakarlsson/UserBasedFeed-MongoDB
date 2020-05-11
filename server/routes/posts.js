// Lägg till express och gör router get, post, put, delete
const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getownposts").get((req, res) => {
  Post.find({ userId: req.session.userId }, function (err, posts) {
    // if (!req.session.username) {
    //   return res.status(401).json("You are not logged in");
    // }
    res.json(posts);
  });
});

router.route("/add").post((req, res) => {
  const userId = req.session.userId;
  const username = req.session.username;
  const title = req.body.title;
  const textContent = req.body.textContent;

  const newPost = new Post({ userId, username, title, textContent });

  console.log("REQ.SESSION.USERNAME IN ADD POST:", req.session.username);

  newPost
    .save()
    .then(() => res.json("Post posted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Post.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title, textContent: req.body.textContent }
  )
    .then(() => res.json("Post updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then(() => res.json("Post Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
