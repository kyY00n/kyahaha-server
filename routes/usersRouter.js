const express = require("express");
const userController = require("../controllers/userController");
userController;
const usersRouter = express.Router();

// Create a user
usersRouter.post("/", userController.createUser);

// Get all users
usersRouter.get("/");

// Get a user by ID
usersRouter.get("/:userId");

// Delete user by ID
usersRouter.delete("/:userId");

module.exports = usersRouter;
