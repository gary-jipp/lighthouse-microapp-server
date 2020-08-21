const express = require('express');
var cors = require('cors');

// Setup our Express App
const app = express();
app.use(cors());
const PORT = 8080;

// Define an endpoint
app.get('/api/kanye', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  // This is the object we want to return to our client
  const reply = {
    quote: "I have nothing profound to say!"
  };
  
  // Send the object as a JSON string
  return res.end(JSON.stringify(reply));
});

// Start listening for requests
app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`),
);