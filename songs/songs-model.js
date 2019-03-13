const db = require("../data/knexConfig");

module.exports = {
  get: function(query) {
    let songsAccess = db("songs");

    const {
      page = 1,
      limit = 10,
      sortby = "artist_name",
      sortdir = "desc",
      id
    } = query;

    if (id) {
      songsAccess.where({ id }).first();

      const promises = [songsAccess, this.getSimilarSongs(id)]; // [ songs, similars ]

      return Promise.all(promises).then(function(results) {
        let [songs, similars] = results;
        songs.similars = similars;

        return songs;
      });
    }
    const offset = limit * (page - 1);

    return db("songs")
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset);
  },
  getSimilarSongs: function(id) {
    return db("similars")
      .where({ track_id: id })
      .first();
  }
};
