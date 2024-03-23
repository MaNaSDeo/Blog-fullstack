const userService = require("../services/user.service");

const register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.status(201).json({ message: "user registered successfully.", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await userService.login(req.body);
    res.status(200).json({ message: "Login successful.", user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
