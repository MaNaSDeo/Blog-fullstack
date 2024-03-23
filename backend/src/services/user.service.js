const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (userData) => {
  const existingUser = await User.isEmailRegistered(userData.email);

  if (existingUser) {
    throw new Error("User already registered.");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);

  userData.password = hashedPassword;

  const user = await User.create(userData);

  return user._id;
};
const login = async (userData) => {
  const { email, password } = userData;

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not registered.");
  }

  //Check for passsword match

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Credentials");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  return {
    user: user._id,
    token,
  };
};

module.exports = { register, login };
