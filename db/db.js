const mongoose = require("mongoose");
const config = require("config");

const connectDb = () => {
  mongoose
    .connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDb..."))
    .catch((err) => {
      console.log(`Could not connect to MongoDb. Error: ${err}`);
      process.exit(1);
    });
};

module.exports = connectDb;