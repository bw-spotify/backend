const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./users-model.js");

router.get("/", async (req, res) => {
  try {
    const users = await Users.get();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving users" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.get(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving user" });
  }
});

router.get("/:id/faves", async (req, res) => {
  try {
    const faves = await Users.getUserFaves(req.params.id);
    res.status(200).json(faves);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving faves" });
  }
});

module.exports = router;
