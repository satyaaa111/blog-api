const bcrypt = require('bcrypt');
const User = require('../../models/users.js'); // Import the User model
const validatePassword = require("../../utils/validatePass.js")
const validateEmail = require("../../utils/validateEmail.js")
// Signup route
const signUp = async (req, res) => {

  validatePassword(req, res, async ()=> {

    validateEmail(req, res, async ()=>{

      const { name, email, password } = req.body;

      try {
        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Create a new user using the User model
        const newUser = new User({
          name,
          email,
          password: hashedPassword,
        });
    
        // Save the new user to the database
        await newUser.save();
    
        res.status(201).json({ message: 'User registered successfully' });
        
      } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    })
  })
};

module.exports = {
  signUp,
};
