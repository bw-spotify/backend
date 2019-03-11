const db = require('../data/knexConfig');

module.exports = {
  get: function(id) {
    const query = db("songs");

    if(id) {
      return query.where( { id }).first();
    }

    return query;
  },
}