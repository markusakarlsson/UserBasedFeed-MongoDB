// Lägg till express och gör router get, post, put, delete
const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/getownposts").get((req, res) => {
  if (!req.session.username) {
    return res.status(400).json("You are not logged in");
  }
  Post.find({ userId: req.session.userId })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});
// router.route("/getownposts").get((req, res) => {
//   Post.find({ userId: req.session.userId }, function (err, posts) {
//     res.json(posts);
//   });
// });

router.route("/add").post((req, res) => {
  if (!req.session.username) {
    return res.status(400).json("You are not logged in");
  }
  const userId = req.session.userId;
  const username = req.session.username;
  const title = req.body.title;
  const textContent = req.body.textContent;

  const newPost = new Post({ userId, username, title, textContent });

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

router.route("/:id").put(async (req, res) => {
  // console.log(req.body, req.params);
  if (!req.session.username) {
    return res.status(400).json("You are not logged in");
  }

  const post = await Post.findOne({ _id: req.params.id });

  if (req.session.userId !== post.userId.toString()) {
    return res.status(400).json("This is not your post!");
  } else {
    const updatedPost = new Post(Object.assign(post, req.body));
    await updatedPost.save();
    res.json("Post updated");
  }
});

router.route("/:id").delete(async (req, res) => {
  if (!req.session.username) {
    return res.status(400).json("You are not logged in");
  }

  const post = await Post.findOne({ _id: req.params.id });

  if (req.session.userId !== post.userId.toString()) {
    return res.status(400).json("This is not your post!");
  } else {
    await post.remove();
    res.json("Post deleted");
  }
});

module.exports = router;
