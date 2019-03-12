const router = require("express").Router();

const Songs = require("./songs-model");

// router.get("/", async (req, res) => {
//   try {
//     const songs = await Songs.get();
//     res.status(200).json(songs);
//   } catch (error) {
//     res.status(500).json({ error: "Error retrieving songs" });
//   }
// });

router.get("/", async (req, res) => {
  try {
    const songs = await Songs.get(req.query);
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ error: "Error querying songs" });
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const song = await Songs.getById(req.query);
//     res.status(200).json(song);
//   } catch (error) {
//     res.status(500).json({ error: "Error retrieving song" });
//   }
// });

module.exports = router;
