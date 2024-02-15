const PostModel = require("../models/post.model");

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res
      .status(400)
      .json({ message: "merci de bien vouloir entrer un message.." });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });

  res.status(200).json(post);
};
