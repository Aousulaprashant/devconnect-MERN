const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const answerRouter = require("./answer");
const questionRouter = require("./question");
const commentRouter = require("./comment");

route.get("/", (req, res) => {
  return res.status(200).json({ msg: "This is the answer route" });
});

route.use("/question", questionRouter);
route.use("/answer", answerRouter);
route.use("/comment", commentRouter);

module.exports = route;
