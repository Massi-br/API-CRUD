const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log("connecté à la DB");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
