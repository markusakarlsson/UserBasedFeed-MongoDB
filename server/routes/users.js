const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/user.model");

// Get all users
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Add a new user
router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json(password))
    .catch((err) => res.status(400).json("Error: " + err));
});

// attempt to login a user
router.route("/login").post(async (req, res) => {
  // Check if username & password is correct
  const user = users.find((user) => user.name === req.body.name);
  if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).json("Wrong username or password");
  }

  // Check if user is already logged in
  if (req.session.username) {
    return res.status(200).json("You are already logged in");
  }

  // Create session
  req.session.username = user.name;
  req.session.role = "admin";

  // Send a response
  res.send("Successfull login");
});

module.exports = router;
