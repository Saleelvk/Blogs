const express = require("express");
const { getUserProfile, updateUserProfile, deleteUser } = require("../controllers/user_controller");
const { protect } = require("../middleware/auth_middleware");

const router = express.Router();

router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.delete("/profile", protect, deleteUser);

module.exports = router;
 