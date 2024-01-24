const { z } = require('zod');
const User = require("../models/users")


const emailValidator = async (req, res, next) => {

  const emailSchema = z.string().email();
  const { email } = req.body;

  const existingEmail = await User.findOne({email});

  if(existingEmail){
    res.status(403).json({ error: "user with this email already exists" });
  }
  await emailSchema.parseAsync(email)
    .then(() => {
      next();
    })
    .catch((error) => {
    //   console.error('Invalid Email:', error.errors);
      res.status(400).json({ error: error.errors });
    });
};

module.exports = emailValidator;

