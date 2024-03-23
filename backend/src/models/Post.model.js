const { default: mongoose } = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Post = new mongoose.model("Post", postSchema);

module.exports = Post;
