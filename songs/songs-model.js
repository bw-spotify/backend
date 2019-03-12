const db = require("../data/knexConfig");

module.exports = {
  get: function(id) {
    const query = db("songs").limit(20);

    if (id) {
      return query.where({ id }).first();
    }

    return query;
  }
};
