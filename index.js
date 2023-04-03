const express = require('express');
const app = express();

app.get('/states/:state/cities/:city', (req, res) => {
  const state = req.params.state;
  const city = req.params.city;
  res.send(`You requested the city of ${city} in the state of ${state}.`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
