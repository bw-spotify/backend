const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const serverConfig = require("./serverConfig.js");

const server = express();

// Global Middleware
server.use(cors());
server.use(helmet());
server.use(express.json());

serverConfig(server); // sets up routes with local middleware

module.exports = server;
