const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Route to register a new user.
router.post("/register", userController.register);

// Route to login existing user.
router.post("/login", userController.login);

module.exports = router;
