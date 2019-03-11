exports.seed = function(knex, Promise) {
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([{ username: "max", password: "pass" }]);
  });
};
