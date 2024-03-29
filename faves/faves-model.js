const db = require("../data/knexConfig");

module.exports = {
  getUserFaves: function(id) {
    return db("songs as s")
      .join("faves as f", "s.id", "=", "f.song_id")
      .join("users as u", "u.id", "=", "f.user_id")
      .select("s.id", "s.artist_name", "s.track_name")
      .where({ "u.id": id });
  },
  add: function(userId, songId) {
    return db("faves").insert({ user_id: userId, song_id: songId });
  },
  remove: function(userId, songId) {
    return db("faves")
      .where({ user_id: userId, song_id: songId })
      .del();
  }
};
