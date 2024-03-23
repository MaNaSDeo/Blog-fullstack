const Post = require("../models/Post.model");

const addNewPost = async (userId, postData) => {
  const post = await Post.create({ author: userId, ...postData });
  return post;
};

const getAllPosts = async () => {
  const allPosts = await Post.find({});

  if (!allPosts.length) {
    throw new Error("No posts found.");
  }

  return allPosts;
};
const updatePost = async (postId, authorId, postData) => {
  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId, author: authorId },
    { $set: postData },
    { new: true }
  );
  if (updatedPost == null) {
    throw new Error("Post not found");
  }
  return updatedPost;
};
const deletePost = async (postId, authorId) => {
  const deletedPost = await Post.findOneAndDelete({
    _id: postId,
    author: authorId,
  });

  if (deletedPost == null) {
    throw new Error("Post not found.");
  }

  return deletedPost;
};
const getAllPostsByAuthorId = async (authorId) => {
  const allPosts = await Post.find({ author: authorId });
  if (!allPosts.length) {
    throw new Error("No posts found.");
  }

  return allPosts;
};

module.exports = {
  addNewPost,
  getAllPosts,
  updatePost,
  deletePost,
  getAllPostsByAuthorId,
};
