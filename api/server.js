const express = require("express");
const helmet = require("helmet");

const usersRouter = require("../users/users-router.js");

const server = express();

// Global Middleware
server.use(helmet());

// Routes
server.use("/api/users", usersRouter);

module.exports = server;
