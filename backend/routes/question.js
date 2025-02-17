const QuestionDB = require("../models/questions");
const AnswerDB = require("../models/answer");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { title, body, tags, user } = req.body;

    if (!title || !body || !user) {
      return res
        .status(400)
        .json({ message: "Title, body, and user are required." });
    }

    const question = new QuestionDB({
      title,
      body,
      tags: tags,
      user,
    });

    const savedQuestion = await question.save();
    res.status(201).json(savedQuestion);
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error. Unable to add question." });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("start");
    const questionDetails = await QuestionDB.find().populate(
      "comments",
      "comment created_at"
    ); // Populating related comments
    // Populating answers (you can add more fields if needed)

    console.log(questionDetails);
    return res.status(200).json(questionDetails);
  } catch (error) {
    console.error("Error: ", error);
    res.status(400).json({
      message: "Error in retrieving questions",
      error: "Bad request",
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Find the question by ID and populate comments
    const question = await QuestionDB.findById(id).populate(
      "comments",
      "_id user comment created_at"
    );

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    // Fetch answers separately where question_id matches
    const answers = await AnswerDB.find({ question_id: id });

    res.status(200).json({ ...question.toObject(), answers });
  } catch (err) {
    console.error("Error:", err);
    res.status(400).json({ message: "Invalid question ID or request" });
  }
});

module.exports = router;
