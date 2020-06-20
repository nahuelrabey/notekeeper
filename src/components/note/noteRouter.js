const express = require("express");
const noteActions = require("./Actions/noteActions");

const router = express.Router();
router.post("/create",noteActions.postNote);
router.get("/:id",noteActions.getNote);
router.put("/:id/update",noteActions.putNote);
router.delete("/:id/delete",noteActions.deleteNote);

module.exports = router;