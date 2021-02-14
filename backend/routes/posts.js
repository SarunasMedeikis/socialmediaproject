const router = require("express").Router();
const Post = require("../models/posts.model");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((error) => res.status(400).json("Error getting posts: ", error));
});

router.route("/add").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const body = req.body.body;

  const newPost = new Post({ title, author, body });

  newPost
    .save()
    .then(() => res.json("Post succesfully created"))
    .catch((error) =>
      res.status(400).json("Error creating new post : ", error)
    );
});

module.exports = router;
