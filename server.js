const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const { title } = require('./db/db');


app.get('/api/db/db', (req, res) => {
  res.json(title);
});










app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});