const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const songsRouter = require("../songs/songs-router.js");
const favesRouter = require("../faves/faves-router.js");
const { authenticate } = require("../auth/authenticate");

module.exports = function(server) {
  server.use("/api", authRouter);
  server.use("/api/songs", authenticate, songsRouter);
  server.use("/api/users", authenticate, usersRouter);
  server.use("/api/faves", authenticate, favesRouter);
  // server.use("/api/songs", songsRouter);
  // server.use("/api/users", usersRouter);
  // server.use("/api/faves", favesRouter);
};
