const db = require("../data/knexConfig");

module.exports = {
  get: function(query) {
    const {
      page = 1,
      limit = 10,
      sortby = "artist_name",
      sortdir = "desc",
      id
    } = query;

    if (id) {
      return db("songs")
        .where({ id })
        .first();
    }
    const offset = limit * (page - 1);

    return db("songs")
      .orderBy(sortby, sortdir)
      .limit(limit)
      .offset(offset);
  }
};
