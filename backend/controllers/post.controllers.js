const postModel = require("../models/post.model");
const PostModel = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  return res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    return res
      .status(400)
      .json({ message: "merci de bien vouloir entrer un message.." });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });

  return res.status(200).json(post);
};

module.exports.editPosts = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    return res.status(400).json({ message: "ce post n'existe pas" });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  return res.status(200).json(updatePost);
};

module.exports.deletePosts = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    return res.status(400).json({ message: "Post not found" });
  }

  const deletedPost = await PostModel.findByIdAndDelete(post);

  return res
    .status(200)
    .json({ message: "Post deleted successfully", deletedPost });
};

module.exports.likePosts = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.dislikePosts = async (req, res) => {
  try {
    const postId = req.params.id;
    const userIdToRemove = req.body.userId;

    const uplikedPost = await PostModel.findByIdAndUpdate(
      postId,
      { $pull: { likers: userIdToRemove } },
      { new: true }
    );
    if (!uplikedPost) {
      return res.status(400).json({ message: "Post not found" });
    }
    return res.status(200).json(uplikedPost);
  } catch (error) {
    res.status(400).json(error);
  }
};
