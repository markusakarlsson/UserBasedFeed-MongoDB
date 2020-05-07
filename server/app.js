// Create app
require("./connection.js");

const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static("public"));

// Routes for users

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

// Routes for posts

const postsRouter = require("./routes/posts");

app.use("/posts", postsRouter);

app.listen(3000, () => console.log("listening at 3000"));