const express = require("express");
const { getAllPosts, getPostById, createPost, updatePost, deletePost,togglePostVisibility, ViewCount} = require("../controllers/post_controller");
const { protect,adminOnly} = require("../middleware/auth_middleware"); 
const router = express.Router();
const { likePost } = require("../controllers/like_controller");
const upload = require("../middleware/uploads");
router.get("/",getAllPosts);
router.get("/:id",protect, getPostById);
router.post("/", upload.single("image"),protect, createPost); 
router.put("/:id", upload.single("image"),protect, updatePost);
router.post("/:id/like", protect, likePost);
router.delete("/:id",protect, deletePost);
router.put("/:id/visibility", protect, togglePostVisibility);
router.post("/:id/view", protect,ViewCount);


  

module.exports = router;

//post Routes
 