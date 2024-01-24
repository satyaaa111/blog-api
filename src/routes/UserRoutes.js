const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth/login");
const { signUp } = require("../controllers/auth/signUp");
const emailValidator = require("../utils/validateEmail");


router.post("/login", login)
router.post("/signUp", signUp)


module.exports = router;