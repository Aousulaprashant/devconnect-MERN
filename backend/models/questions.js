const mongoose = require("mongoose");

const questionschema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],

  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "answers", // Reference to the answers collection
    },
  ],
});

module.exports = mongoose.model("questions", questionschema);
