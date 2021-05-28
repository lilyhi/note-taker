
// The following HTML routes should be created:

const path = require('path');
const router = require('express').Router();

// const fs = require('fs'); i dont think I need this one here



// GET /notes should return the notes.html file.
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, `./public/notes.html`));
});


// GET * should return the index.html file.
router.get('*', (req, res) => {
  res.sendFile(patth.join(__dirname, './public/index.html'));
});








module.exports = router;