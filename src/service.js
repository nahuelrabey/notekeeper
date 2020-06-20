const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const DataBaseController = require("./modules/databse/DataBaseController");
const noteRouter = require("./components/note/noteRouter");

const PORT = process.env.PORT || 4000;
const dbUri = process.env.DBURI || "mongodb://api:apipwd@localhost:27017/notes";

// const db = new DataBaseController(dbUri);

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then((res) => console.log(`database connected`))
  .catch((err) => console.error(`error connectingo to database\n${err}`));
mongoose.set("bufferCommands", false);
const httpServer = express();
httpServer.use("/note", noteRouter);
httpServer.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server up at port ${PORT}`);
});
