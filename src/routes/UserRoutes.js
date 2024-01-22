const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth/login");
const { signUp } = require("../controllers/auth/signUp");


router.post("/login", login)
router.post("/signUp", signUp)


module.exports = router;