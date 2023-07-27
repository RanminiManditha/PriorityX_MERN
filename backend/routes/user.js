const express = require("express");

const { loginUser, signupUser } = require("../controllers/userController");

const router = express.Router();

//login a user
router.post("/login", loginUser);

//signup a user
router.post("/signup", signupUser);

module.exports = router;
