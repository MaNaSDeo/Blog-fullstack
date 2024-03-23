const Comment = require("../models/Comment.model");

const addNewComment = async (postId, authorId, commentData) => {
  const comment = await Comment.create({
    author: authorId,
    postId,
    ...commentData,
  });
  return comment;
};

const getAllComments = async (postId) => {
  const allComments = await Comment.find({ postId });

  if (!allComments.length) {
    throw new Error("No comments found.");
  }
  return allComments;
};
module.exports = { addNewComment, getAllComments };
