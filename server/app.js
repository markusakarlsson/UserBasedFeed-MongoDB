// Create app
require("./connection.js");

const cookieSession = require("cookie-session");

const express = require("express");

const cors = require("cors");

const app = express();

app.use(
  cookieSession({
    secret: "aVeryS3cr3tk3y",
    maxAge: 1000 * 30, //10s
    sameSite: "strict",
    httpOnly: true,
    secure: false,
  })
);

app.use(express.json());

app.use(cors({ credentials: true, origin: ['http://localhost:3000']}));

app.use(express.static("public"));

// Routes for users

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

// Routes for posts

const postsRouter = require("./routes/posts");

app.use("/posts", postsRouter);

// Server running

app.listen(3001, () => console.log("listening at 3001"));
