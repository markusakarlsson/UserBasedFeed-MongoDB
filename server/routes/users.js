const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/user.model");

router.route("/authenticate").get((req, res) => {
  if (!req.session.username) {
    res.status(401).json("You are not authorized, log in!");
  } else {
    res.status(200).json("You're logged in");
  }
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
      return res.status(401).json("Wrong username or password");
    }
    // Check if user is already logged in
    if (req.session.username) {
      return res.status(422).json("You are already logged in");
    }

    // Create session
    req.session.username = user.username;
    req.session.userId = user._id;

    // Send a response
    res.send("Successfull login");
  }
});

// LOG OUT
router.route("/logout").delete((req, res) => {
  req.session = null;
  console.log("Destroyed client session");

  res.json("Logged out!");
});

module.exports = router;
