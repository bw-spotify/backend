const router = require('express').Router();

router.get('/', async (req, res) => {
  res.status(200).send("hi")
});

module.exports = router;