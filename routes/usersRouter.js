const express = require("express");
const userController = require("../../4th-seminar/controller/userController");
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
