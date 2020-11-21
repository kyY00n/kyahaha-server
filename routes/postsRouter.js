const express = require("express");
const postsRouter = express.Router();

// Create a post
postsRouter.post("/");

// Get all posts
postsRouter.get("/");

// Get a post by ID
postsRouter.get("/:postId");

// Delete a post by ID
postsRouter.delete("/");

module.exports = postsRouter;
