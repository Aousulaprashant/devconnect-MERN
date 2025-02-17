const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  comment: String,
  created_at: {
    type: Date,
    default: Date.now(),
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  user: Object,
});

module.exports = mongoose.model("comments", commentSchema);
