const mongoose = require("mongoose");

class DataBaseController {
  constructor(connectionUri) {
    mongoose
      .connect(connectionUri, { useNewUrlParser: true })
      .then((res) => console.log(`database connected`))
      .catch((err) => console.error(`error connectingo to database\n${err}`));

    this.healthCheck = [
      this.checkError,
      this.checkDisconnecting,
      this.checkDisconnected,
      this.checkClose
    ];
    mongoose.set("bufferCommands", false);
  }
  checkError(req, res, next) {
    mongoose.connection.on('error', (err) => {
      if (err) {throw (err)};
    });
    next();
  }
  checkDisconnected(req, res, next) {
    mongoose.connection.on("disconnected", (err) => {
      if (err) {throw (err)};
    });
    next();
  }
  checkDisconnecting(req, res, next) {
    mongoose.connection.on("disconnecting", (err) => {
      if (err) {throw (err)};
    });
    next();
  }
  checkClose(req, res, next) {
    mongoose.connection.on("close", (err) => {
      if (err) {throw (err)};
    });
    next();
  }
}

module.exports = DataBaseController;
