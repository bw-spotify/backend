const router = require("express").Router();

const Faves = require("../faves/faves-model.js");

router.get("/", async (req, res) => {
  try {
    const faves = await Faves.getUserFaves(req.decoded.userId);
    res.status(200).json(faves);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving faves" });
  }
});

router.post("/", async (req, res) => {
  if (!req.body.songId) {
    res.status(500).json({ error: "Must send song id to add fave." });
  } else {
    try {
      const [id] = await Faves.add(req.decoded.userId, req.body.songId);
      if (id) {
        const faves = await Faves.getUserFaves(req.decoded.userId);
        res.status(201).json(faves);
      } else {
        res.status(500).json({ error: "Fave already exists" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error adding fave" });
    }
  }
});

router.delete("/", async (req, res) => {
  if (!req.body.songId) {
    res.status(500).json({ error: "Must send song id to delete fave." });
  } else {
    try {
      const count = await Faves.remove(req.decoded.userId, req.body.songId);

      if (count > 0) {
        // res.status(204).end();
        const faves = await Faves.getUserFaves(req.decoded.userId);
        res.status(200).json(faves);
      } else {
        res.status(404).json({ error: "Fave not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting fave" });
    }
  }
});

module.exports = router;
