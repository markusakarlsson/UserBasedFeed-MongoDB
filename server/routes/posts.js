// Lägg till express och gör router get, post, put, delete
const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/").get((req, res) => {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  

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


router.route("/:id").get((req, res) => {
    Post.findOne({ _id: req.params.id })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json("Error: " + err));
}); 


router.route("/:id").put((req, res) => {
    Post.findOneAndUpdate({_id: req.params.id}, {title: "Updated title", textContent: "Updated text content"  })
    .then(() => res.json("Post updated!"))
    .catch((err) => res.status(400).json("Error: " + err));
    
})


module.exports = router;
