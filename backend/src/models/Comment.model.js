const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, min: 1, max: 100 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = new mongoose.model("Comment", commentSchema);

module.exports = Comment;
