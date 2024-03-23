const express = require("express");
const router = express.Router();
const {
  addNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getAllPostsByAuthorId,
} = require("../controllers/post.controller");

const {
  addNewComment,
  getAllComments,
} = require("../controllers/comment.controller");
const authenticateToken = require("../middleware/authenticateToken.middleware");

// Route to add a new post.
router.post("/", authenticateToken, addNewPost);

// Route to fetch all posts.
router.get("/", getAllPosts);

// Route to fetch all posts of a author.

router.get("/:authorId", getAllPostsByAuthorId);

// Route to update a post
router.put("/:postId", authenticateToken, updatePost);

// Route to delete a post
router.delete("/:postId", authenticateToken, deletePost);

// Route to add a new comment to the post
router.post("/:postId/comments", authenticateToken, addNewComment);

// Route to get all comments on a post
router.get("/:postId/comments", authenticateToken, getAllComments);

module.exports = router;
