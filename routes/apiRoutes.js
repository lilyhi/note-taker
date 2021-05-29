const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');

// do we need to require db.json even tho its empty
// const { database } = require('../../db/db');


// The following API routes should be created:


// GET /api/notes should read the db.json file and return all saved notes as JSON.

// --- it think i dont have to use /api/ bc i used the routes on server.js?? lines 23 and 24
router.get('/notes', (req, res) => {
  res.json(notes);
})


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post('/notes', (req, res) => {
  req.body.id = database.length.toString();

  // if any data in req.body is incorrect, send 400 error back

})









module.exports = router;