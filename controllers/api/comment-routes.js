const router = require("express").Router();
const { Comment, User, Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbCommentData = await Comment.findAll({});
    res.json(dbCommentData);
  } catch (err) {
    res.status(500).json(err);
  }
});