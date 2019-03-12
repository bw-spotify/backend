const router = require("express").Router();

const Users = require("./users-model.js");
const Faves = require("../faves/faves-model.js");

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

module.exports = router;
