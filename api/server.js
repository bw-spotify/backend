const express = require("express");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const songsRouter = require("../songs/songs-router.js");

const server = express();

// Global Middleware
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/songs", songsRouter);

module.exports = server;
