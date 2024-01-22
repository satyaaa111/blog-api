const bcrypt = require('bcrypt');


// Replace this with your actual user database
const users = [];

// Middleware to parse JSON in requests
app.use(express.json());

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword,
    };

    // Add the new user to the database
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
