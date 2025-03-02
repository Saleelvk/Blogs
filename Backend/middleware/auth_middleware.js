const jwt = require("jsonwebtoken");
const User = require("../models/user_model");
const expressAsyncHandler = require("express-async-handler");

const protect = async (req, res, next) => {
    try {
        let token = req.cookies?.token || req.headers.authorization?.split(" ")[1]; 
        
        console.log("Received Token:", token); // Debugging Log

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        console.error("JWT Error:", error.message);
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

const adminOnly = expressAsyncHandler(async (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      console.log("Admin access granted:", req.user._id);
      next();
    } else {
      console.log("Admin access denied:", req.user ? req.user._id : "No user");
      return res.status(401).json({ message: "Not Authorized as an admin" });
    }
  });

module.exports = { protect ,adminOnly};
