const router = require("express").Router();

const Faves = require("../faves/faves-model.js");

router.get("/:id/faves", async (req, res) => {
  try {
    const faves = await Faves.getUserFaves(req.params.id);
    res.status(200).json(faves);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving faves" });
  }
});

router.post("/:id/faves", async (req, res) => {
  if (!req.body.songId) {
    res.status(500).json({ error: "Must send song id to add fave." });
  } else {
    try {
      const [id] = await Faves.add(req.params.id, req.body.songId);
      if (id) {
        const faves = await Faves.getUserFaves(req.params.id);
        res.status(201).json(faves);
      } else {
        res.status(500).json({ error: "Error adding fave" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error adding fave" });
    }
  }
});

router.delete("/:id/faves", async (req, res) => {
  if (!req.body.songId) {
    res.status(500).json({ error: "Must send song id to delete fave." });
  } else {
    try {
      const count = await Faves.remove(req.params.id, req.body.songId);

      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(500).json({ error: "Error deleting fave" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error deleting fave" });
    }
  }
});

module.exports = router;
