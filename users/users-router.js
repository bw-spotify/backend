const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', async (req, res) => {
  try {
    const users = await Users.get()
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving users"})
  }
});

module.exports = router;