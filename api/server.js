const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const songsRouter = require("../songs/songs-router.js");
const { authenticate } = require("../auth/authenticate");

const server = express();

// Global Middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api", authRouter);
// server.use("/api/users", authenticate, usersRouter);
server.use("/api/users", usersRouter);
// server.use("/api/songs", authenticate, songsRouter);
server.use("/api/songs", songsRouter);

module.exports = server;
