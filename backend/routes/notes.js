const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { query, validationResult, body } = require('express-validator');

// Fetch All Notes from the database using GET request.
// await - Whenever Promise is not fullfied. It will stop the execution.
// If the Promise is fullfied then It will go to next line and execute the program.

// ROUTE 1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Insert notes into the database.

// ROUTE 2: Add a new notes using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    // Adding a Title and Description to each and every notes
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description atleast must be a 5 character').isLength({ min: 5 })
], async (req, res) => {
    // Destructuring
    const { title, description, tag } = req.body;
    // If there are error, return Bad request and error.
    const errors = validationResult(req);

    try {
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const notes = new Note({
            title, description, tag, user: req.user.id
        })

        const savaNote = await notes.save()
        res.json(savaNote)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    // Get the data from the body using Destructuring
    const { title, description, tag } = req.body;
    try {
        // Create a newNote object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the note to be updated and update it
        // params means is an object containing properties mapped to the named route “parameters”.
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // note.user.toString() it will return the note id
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        // new: true - If new user comming, It will creating using new: true and update my note.
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

// ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be deleted and delete it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user own this Notes.
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id)
        res.json({ "sucess": "Note has been deleted", note: note });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;