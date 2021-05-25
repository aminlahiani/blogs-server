const mongoose = require("mongoose");

const MongoUrl = "mongodb://localhost/amin1515";
mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connection to mongoose successful");
});
