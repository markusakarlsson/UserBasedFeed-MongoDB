// Lägg till express och gör router get, post, put, delete
const router = require("express").Router();
let Post = require("../models/post.model");

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const textContent = req.body.textContent;

    const newPost = new Post({ username, textContent });

    newPost
        .save()
        .then(() => res.json("Post posted!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;