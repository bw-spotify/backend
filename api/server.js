const express = require("express");
const helmet = require("helmet");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

// Global Middleware
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api/users", usersRouter);
server.use("/api", authRouter);

module.exports = server;
