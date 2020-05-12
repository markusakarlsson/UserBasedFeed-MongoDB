const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/user.model");

// Get all users
router.route("/").get((req, res) => {
  if (!req.session.username) {
    return res.status(401).json("You are not authorized, log in!");
  }
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
    .then(() => res.json(password), "User created")
    .catch((err) => res.status(400).json("Error: " + err));
});

// attempt to login a user
router.route("/login").post(async (req, res) => {
  // Check if username & password is correct
  User.findOne({ username: req.body.username }, function (err, user) {
    logInUser(user);
  });

  async function logInUser(user) {
    // Check if username & password is correct
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      console.log("Wrong username or password")
      return res.status(401).json("Wrong username or password");
    }
    // Check if user is already logged in
    if (req.session.username) {
      console.log("Console.log in login at server:", "you're already logged in")
      return res.status(422).json("You are already logged in");
    }

    // Create session
    req.session.username = user.username;
    req.session.userId = user._id;

    // Send a response
    res.send("Successfull login");
  }
});

module.exports = router;
