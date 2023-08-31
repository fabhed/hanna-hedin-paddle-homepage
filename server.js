// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Creating Express server
const app = express();

// Setting up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Defining routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'homepage.html'));
});

// Starting the server
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
