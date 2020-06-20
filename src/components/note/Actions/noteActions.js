const asyncHandler = require("express-async-handler");
const NoteModel = require("../Domain/NoteModel");

const noteActions = new (function () {
  this.postNote = asyncHandler(async (req, res, next) => {
    
    const newNote = new NoteModel(req.body);
    const doc = await newNote.save()
    res.send(doc);

  });

  this.putNote = asyncHandler(async (req, res, next) => {
    const note = new NoteModel(req.body);
    res.send(note);
  });

  this.getNote = asyncHandler(async (req, res, next) => {
    const note = new NoteModel(req.body);
    res.send(note);
  });

  this.deleteNote = asyncHandler(async (req, res, next) => {
    const note = new NoteModel(req.body);
    res.send(note);
  });
})();

module.exports = noteActions;
