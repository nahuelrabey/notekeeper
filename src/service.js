const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

mongoose.connection("mongodb://localhost:27017/notes", {
  useNewUrlParser: true
}).then((res) => console.log("database connected\n", res))
.catch(err => console.error("database connection error", err))

const httpServer = express();
httpServer.listen(PORT, (err) => {
  if (error) return console.error(err);
  console.log(`Server up at port ${PORT}`);
});
