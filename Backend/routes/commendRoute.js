const express = require("express");
const { addComment, getComments, deleteComment } = require("../controllers/comment_controller");
const { likeComment } = require("../controllers/like_controller");
const { protect } = require("../middleware/auth_middleware");
 
const router = express.Router();

router.post("/:id", protect, addComment); // Add a comment
router.get("/:id", getComments); // Get comments
router.delete("/:id", protect, deleteComment); // Delete a comment
router.post("/:id/like", protect, likeComment); // Like a comment

module.exports = router;
