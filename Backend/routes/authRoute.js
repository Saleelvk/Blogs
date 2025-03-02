const express = require('express');
const router =express.Router() 
const { signup, login } = require("../controllers/auth_controller");
const { protect } = require('../middleware/auth_middleware');
const User = require('../models/user_model');

//auth user
router.post('/signup',signup);
router.post('/login',login);
 
router.get("/me", protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("_id name email");
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  




module.exports = router;