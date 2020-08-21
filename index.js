const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8080;

app.get('/api/kanye', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const reply = {
    quote: "I have nothing profound to say!"
  };

  return res.end(JSON.stringify(reply));
});

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}!`),
);