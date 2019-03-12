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

module.exports = router;
