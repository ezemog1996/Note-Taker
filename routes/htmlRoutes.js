const path = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
    //do stuff on route hits
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/notes", (req, res) => {
    //do stuff on route hits
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;