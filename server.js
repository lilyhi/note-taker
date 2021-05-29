const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');



// middleware
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }))
// parse incoming string or array data
app.use(express.json());
// instruct the server to make files available
app.use(express.static('public'));


// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);




// const { title } = require('./db/db');

// app.get('/api/db/db', (req, res) => {
//   res.json(title);
// });


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});