const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: String,
    author: String,
    likers: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
