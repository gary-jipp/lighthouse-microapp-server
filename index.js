const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 8080;

const quote = "One day I'm gonna run for President!";

// Simple random number generator
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Define an endpoint
app.get('/api/kanye', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  // Every so often inject our own message
  const random = getRandomInt(1, 5);
  if (random === 3) {
    const reply = { quote };
    return res.end(JSON.stringify(reply));
  }


  // Get data from the downstream service
  const url = "https://api.kanye.rest";
  axios.get(url)
    .then(result => {
      const reply = result.data;
      return res.end(JSON.stringify(reply));
    });

});

// Start listening for requests
app.listen(PORT, () => {
  console.log("Running on port", PORT);
});