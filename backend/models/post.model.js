const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = postSchema;
