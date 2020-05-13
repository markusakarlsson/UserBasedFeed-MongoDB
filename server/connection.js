// Create connection

var mongoose = require("mongoose");

mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/userbasedfeed", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connection created!");
});
