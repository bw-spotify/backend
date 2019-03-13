const express = require("express");
const helmet = require("helmet");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const cors = require("cors");

const serverConfig = require("./serverConfig.js");

const server = express();

// Log file
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a"
});

// Global Middleware
server.use(cors());
server.use(helmet());
server.use(morgan("combined", { stream: accessLogStream }));
server.use(express.json());

serverConfig(server); // sets up routes with local middleware

server.get("/api", (req, res) => {
  res.send(
    `<p>Welcome to the Clarify API</br>
POST /api/login {username: String, password: String}</br>
POST /api/register {username: String, password: String}</br>
GET /api/users</br>
GET /api/users/:id</br>
GET /api/songs</br>
GET /api/songs?id=3J2Jpw61sO7l6Hc7qdYV91&page=1&limit=10&sorby=artist_name&sortdir=desc</br>
GET /api/songs/search?q=searchStr (also prev query params avail)</br>
GET /api/faves (reads userId off of token sent back to server)</br>
POST /api/faves { songId: "32dMH9MvlTJaABrPHY52Yb" }</br>
DELETE /api/faves { songId: "32dMH9MvlTJaABrPHY52Yb" }<p>`
  );
});

module.exports = server;
