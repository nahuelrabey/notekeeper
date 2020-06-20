const asyncHandler = require("express-async-handler");
const NoteModel = require("../Domain/NoteModel");

const noteActions = new (function () {
  this.postNote = asyncHandler(async (req, res, next) => {
    NoteModel.create(req.body, function (err, doc) {
      if (err) console.log(err);
      console.log(doc);
    });
    res.send(response);
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
