const express = require("express");
const router = express.Router();
const commentDB = require("../models/comment");

router.post("/:id", async (req, res) => {
  try {
    const { comment, user } = req.body;
    const { id } = req.params;

    // Validate input
    if (!comment || !user) {
      return res
        .status(400)
        .json({ message: "Comment and user are required." });
    }

    const newComment = await commentDB.create({
      quetion_id: id,
      comment,
      user,
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment: newComment,
    });
  } catch (err) {
    console.error("Error:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error. Unable to add comment." });
  }
});

module.exports = router;
