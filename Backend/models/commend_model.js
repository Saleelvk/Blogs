const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Changed "users" to "User"
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Changed "User" here too
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);