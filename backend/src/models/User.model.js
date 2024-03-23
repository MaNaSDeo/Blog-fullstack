const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.statics.isEmailRegistered = async (email) => {
  const user = await User.findOne({ email });
  return !!user;
};

const User = new mongoose.model("User", userSchema);

module.exports = User;
