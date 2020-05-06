// Create app

const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(3000, () => console.log("listening at 3000"));

// Create connection

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/userbasedfeed", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection created!");
});
