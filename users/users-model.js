const db = require("../data/knexConfig");

module.exports = {
  get: function(id) {
    const query = db("users as u");

    if (id) {
      query.where("u.id", id).first();
    }

    return query;
  },
  findBy: function(filter) {
    return db("users")
      .where(filter)
      .first();
  },
  add: function(user) {
    return db("users").insert(user);
  },
  getUserFaves: function(id) {
    return db("songs as s")
      .join("faves as f", "s.id", "=", "f.song_id")
      .join("users as u", "u.id", "=", "f.user_id")
      .select("s.artist_name", "s.track_name")
      .where({ "u.id": id });
  }
};
