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

server.get("/api", (req, res) => {
  res.send(
    `Welcome to the Clarify API
POST /api/login {username: String, password: String}
POST /api/register {username: String, password: String}
GET /api/songs
GET /api/songs?id=3J2Jpw61sO7l6Hc7qdYV91&page=1&limit=10&sorby=artist_name&sortdir=desc
GET /api/songs/search?q=searchStr (also prev query params avail)
GET /api/users/:id
GET /api/faves (reads userId off of token sent back to server)
POST /api/faves { songId: "32dMH9MvlTJaABrPHY52Yb" }
DELETE /api/faves { songId: "32dMH9MvlTJaABrPHY52Yb" }`
  );
});

module.exports = server;
