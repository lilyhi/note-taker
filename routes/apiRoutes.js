const router = require("express").Router();
const path = require("path");
const fs = require("fs");
// const notes = require('../db/db.json');
// const { database } = require('../db/db');  --- which one is correct?
const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// The following API routes should be created:

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// --- it think i dont have to use /api/ bc i used the routes on server.js?? lines 23 and 24
router.get("/notes", (req, res) => {
  //read the db.json file
  fs.readFile("./db/db.json", "utf8", (err, response) => {
    if (err) {
      throw err;
    } else {
      //parsing data to JSON format
      const allNotes = JSON.parse(response);
      //return all saved notes as JSON.
      res.json(allNotes);
    }
  });
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
router.post("/notes", (req, res) => {
  const newNote = req.body;
  //adding a new id property with value to the req.body using the npm package uuid();
  newNote.id = uuidv4();
  // console.log("New Note", newNote);
  //read the db.json file
  fs.readFile("./db/db.json", "utf8", (err, response) => {
    if (err) {
      throw err;
    } else {
      //parsing data to JSON format
      const existingNotes = JSON.parse(response);
      // console.log("existingNotes", existingNotes);
      const combinedNotes = [...existingNotes, newNote];
      // console.log("combinedNotes", combinedNotes);

      //Updating the file with old and new Notes 
      fs.writeFile(
        "./db/db.json",
        JSON.stringify(combinedNotes),
        (err, dataRes) => {
          if (err) {
            throw err;
          } else {
            res.json(combinedNotes);
          }
        }
      );
    }
  });
});

module.exports = router;
