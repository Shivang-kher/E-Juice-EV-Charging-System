const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.DB_URL;
module.exports = () => {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log("Could not connect");
  }

  const dbConnection = mongoose.connection;

  return dbConnection;
};