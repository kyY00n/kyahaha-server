const express = require("express");
const postController = require("../controllers/postController");
const upload = require("../modules/multer");
const postsRouter = express.Router();

// Create a post
postsRouter.post("/", upload.single("image"), postController.createPost);

// Get all posts
postsRouter.get("/", postController.readAllPosts);

// Get a post by ID
postsRouter.get("/:postId");

// Delete a post by ID
postsRouter.delete("/");

postsRouter.post("/:postId/like", postController.toggleLike);

module.exports = postsRouter;
