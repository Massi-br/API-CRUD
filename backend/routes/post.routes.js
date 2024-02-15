const express = require("express");
const {
  setPosts,
  getPosts,
  editPosts,
  deletePosts,
  likePosts,
  dislikePosts,
} = require("../controllers/post.controllers");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPosts);
router.delete("/:id", deletePosts);
router.patch("/like-post/:id", likePosts);
router.patch("/dislike-post/:id", dislikePosts);

module.exports = router;
