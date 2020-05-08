// Create app
require("./connection.js");

const express = require("express");

const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static("public"));

// Routes for users

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

// Routes for posts

const postsRouter = require("./routes/posts");

app.use("/posts", postsRouter);


// Server running

app.listen(3001, () => console.log("listening at 3001"));