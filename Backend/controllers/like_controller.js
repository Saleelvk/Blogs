const asyncHandler = require("express-async-handler");
const Post = require("../models/post_model");
const Comment = require("../models/commend_model");

// Like a Post
const likePost = asyncHandler(async (req, res) => {
    const { id } = req.params; // Post ID
    const userId = req.user._id; // Get user ID from authenticated request

    const post = await Post.findById(id);
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    const likeIndex = post.likes.indexOf(userId);

    if (likeIndex === -1) {
        // User has not liked it yet, so like the post
        post.likes.push(userId);
        await post.save();
        return res.status(200).json({ message: "Post liked", liked: true, likeCount: post.likes.length });
    } else {
        // User already liked it, so unlike it
        post.likes.splice(likeIndex, 1);
        await post.save();
        return res.status(200).json({ message: "Post unliked", liked: false, likeCount: post.likes.length });
    }
});


// Like a Comment
const likeComment = asyncHandler(async (req, res) => {
    const { id } = req.params; // Comment ID
    const comment = await Comment.findById(id);

    if (!comment) {
        return res.status(404).json({ message: "Comment not found" });
    }

    if (comment.likes.includes(req.user._id)) {
        return res.status(400).json({ message: "Already liked" });
    }

    comment.likes.push(req.user._id);
    await comment.save();
    res.status(200).json({ message: "Comment liked" });
});

module.exports = { likePost, likeComment };
