// Lägg till express och gör router get, post, put, delete. Glöm ej Installera bcrypt.
const router = require("express").Router();
const bcrypt = require("bcrypt");
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {
  const username = req.body.username;
  const password = await bcrypt.hash(req.body.password, 10);

  const newUser = new User({ username, password });

  newUser
    .save()
    .then(() => res.json(password))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
