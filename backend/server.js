const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

//Express server setup
const app = express();
const port = process.env.PORT || 5000;

//DB connection
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB succesfully connected via mongoose (quack)");
});

//Require newly created routes
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");
//Whenever someone goes to /posts // /users in our app, the postsRouter/usersRouter will be rendered
// app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Socialmedia app listening at http://localhost:${port}`);
});
