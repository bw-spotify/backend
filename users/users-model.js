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
  }
};
