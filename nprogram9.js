// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();
const PORT = 3000;

// GET request
app.get('/', (req, res) => {
  res.send('Welcome to my Node.js server!');
});

//GET request with a query parameter
app.get('/greet', (req, res) => {
  const { name } = req.query; // Extracting the 'name' query parameter
  if (name) {
    res.send(`Hello, ${name}!`);
  } else {
    res.status(400).send('Please provide a name in the query parameter.');
  }
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
