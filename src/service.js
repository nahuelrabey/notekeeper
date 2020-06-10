const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const DataBaseController = require("./modules/databse/DataBaseController");

const PORT = process.env.PORT || 4000;
const dbUri = process.env.DBURI || "mongodb://api:apipwd@localhost:27017/notes";

const db = new DataBaseController(dbUri);

const httpServer = express();
httpServer.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server up at port ${PORT}`);
});
