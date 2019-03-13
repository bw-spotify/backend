const router = require("express").Router();

const Songs = require("./songs-model");

router.get("/", async (req, res) => {
  try {
    const songs = await Songs.get(req.query);
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: "Error querying songs" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const songs = await Songs.search(req.query);
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: "Error searching songs" });
  }
});

module.exports = router;
