const express = require("express");
const router = express.Router();
const answerDB = require("../models/answer");

router.post("/", async (req, res) => {
  try {
    const { question_id, answer, user } = req.body;

    // Validate input
    if (!question_id || !answer || !user) {
      return res
        .status(400)
        .json({ message: "Question ID, answer, and user are required." });
    }

    const newAnswer = await answerDB.create({ question_id, answer, user });

    res.status(201).json({
      message: "Answer added successfully",
      answer: newAnswer,
    });
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error. Unable to add answer." });
  }
});

module.exports = router;
