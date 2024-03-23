const commentService = require("../services/comment.service");

const addNewComment = async (req, res) => {
  try {
    const commentData = req.body;
    const { postId } = req.params;
    const userId = req.user.id;
    const comment = await commentService.addNewComment(
      postId,
      userId,
      commentData
    );
    res.status(201).json({ message: "comment added successfully.", comment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await commentService.getAllComments(postId);
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addNewComment, getAllComments };
