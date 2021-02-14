const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postsSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postsSchema);

module.exports = Post;
