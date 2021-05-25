const mongoose = require("mongoose");

const MongoUrl = "mongodb://localhost/test";
mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connection to mongoose successful");
});
