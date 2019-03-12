const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");
const tokenService = require("./token-service.js");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ error: "Must provide username and password to login" });
  } else {
    try {
      const user = await Users.findBy({ username });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenService.generateToken(user);

        res.status(200).json({
          message: `Welcome back ${user.username}. Here is your token`,
          token,
          username: user.username
        });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error logging in" });
    }
  }
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .json({ error: "Must provide username and password to register" });
  } else {
    try {
      const checkUser = await Users.findBy({ username });
      if (checkUser) {
        res.status(400).json({ error: "User already exists" });
      } else {
        const hash = bcrypt.hashSync(password, 10);
        req.body.password = hash;

        const [id] = await Users.add(req.body);

        const user = await Users.get(id);
        if (user) {
          const token = tokenService.generateToken(user);

          res.status(200).json({
            message: `Welcome ${user.username}. Here is your token.`,
            token,
            username: user.username
          });
        } else {
          res.status(404).json({ error: "Error registering user" });
        }
      }
    } catch (error) {
      res.status(500).json({ error: "Error registering user" });
    }
  }
});
module.exports = router;
