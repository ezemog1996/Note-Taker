const { readFileSync } = require("fs");
const path = require("path");
const router = require("express").Router();
const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuid/v1")

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getNotes = () => {
   return readFile(path.join(__dirname, "../db/db.json"), "utf8");
}

const addNotes = (note) => {
    //note looks like {title: "stuff", text: "more stuff"}
    //add id
    const updatedNote = {
        title: note.title,
        text: note.text,
        id: uuidv1()
    }
    return getNotes().then((notes) => {
        const allNotes = JSON.parse(notes);
        allNotes.push(updatedNote);
        writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(allNotes)).then((newNotes) => newNotes);
    });
 }

router.get("/api/notes", (req, res) => {
    //do stuff on route hits
    //get the notes
    getNotes().then((notes) => {
        //send the notes
        res.json(JSON.parse(notes));
    });
});

router.post("/api/notes", (req, res) => {
    //do stuff on route hits
    //get the notes
    addNotes(req.body).then((notes) => {
        //send the notes
        res.send(notes);
    });
});

module.exports = router;