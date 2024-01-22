const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// Replace this with your actual user database
const users = [
  {
    id: 1,
    username: 'exampleuser',
    // Replace 'password123' with the hashed password for 'password123'
    password: '$2b$10$jNSaTBNgOJ2HmjWD6rMg/uvcVRcmgr15cHs1ZM3RsRZjURj.nxBnG',
  },
];

const login = async (req, res) => {
    
    const { username, password } = req.body;
    
    // Find the user by username
    const user = users.find((user) => user.username === username);
  
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  
    try {
      // Compare the provided password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // If the password is correct, create a JWT token
      const token = jwt.sign({ userId: user.id, username: user.username }, 'your-secret-key', {
        expiresIn: '1h', // Token expiration time
      });
  
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
module.exports = {
    login,
};


