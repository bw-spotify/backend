const router = require("express").Router();
const _ = require("lodash");
const Songs = require("./songs-model");

router.get("/", async (req, res) => {
  try {
    const songs = await Songs.get(req.query);
    const simArray = _.values(songs.similars);

    const a = await Promise.all(
      simArray
        .map(async sim => {
          let data = await Songs.get({ id: sim });

          return {
            artist_name: data.artist_name,
            track_name: data.track_name,
            id: data.id
          };
        })
        .filter((song, index) => index !== 0)
    );

    songs.similars = a;

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
