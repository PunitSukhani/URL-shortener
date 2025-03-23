const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connectToMongoDb(url) {
  return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
}

module.exports = connectToMongoDb;
