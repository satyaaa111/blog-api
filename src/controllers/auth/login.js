const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../models/users.js');

const login = async (req, res) => {

  const { name, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ name });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If the password is correct, create a JWT token
    const token = jwt.sign({ userId: user.password, username: user.name }, process.env.SECRET_KEY);

    // console.log(token);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
