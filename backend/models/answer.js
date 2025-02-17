const mongoose = require("mongoose");

const anserschema = mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },

  answer: String,
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
});

module.exports = mongoose.model("answers", anserschema);
