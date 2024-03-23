const postService = require("../services/post.service");

const addNewPost = async (req, res) => {
  try {
    const postData = req.body;
    const userId = req.user.id;
    const post = await postService.addNewPost(userId, postData);

    res.status(201).json({ message: "post added successfully.", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllPostsByAuthorId = async (req, res) => {
  try {
    const { authorId } = req.params;
    const posts = await postService.getAllPostsByAuthorId(authorId);

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const postData = req.body;
    const { postId } = req.params;
    const userId = req.user.id;
    const updatedPost = await postService.updatePost(postId, userId, postData);
    res
      .status(200)
      .json({ message: "post updated successfully.", updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const userId = req.user.id;

    const { postId } = req.params;
    const deletedPost = await postService.deletePost(postId, userId);
    res
      .status(200)
      .json({ message: "post deleted successfully.", deletedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getAllPostsByAuthorId,
};
