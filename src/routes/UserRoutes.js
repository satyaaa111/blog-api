const express = require("express");
const router = express.Router();

const { login } = require("../controllers/auth/login");
const { signUp } = require("../controllers/auth/signUp");
const verifyEmail = require("../controllers/email/verifyEmail");


router.post("/login", login)
router.post("/signUp", signUp)


router.get("/emailVerify/:token", verifyEmail)


module.exports = router;