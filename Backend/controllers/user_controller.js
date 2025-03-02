const asyncHandler = require("express-async-handler");
const User = require("../models/user_model");


const getUserProfile = asyncHandler(async (req, res) => {
    if (!req.user) { 
        return res.status(401).json({ message: "User not authorized" });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
    });
});


const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    await user.save();
    res.status(200).json({ message: "Profile updated", user: { _id: user._id, name: user.name, email: user.email } });
});

// Delete User Account
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();
    res.status(200).json({ message: "User deleted successfully" });
});

module.exports = {
    getUserProfile,
    updateUserProfile,
    deleteUser
};
