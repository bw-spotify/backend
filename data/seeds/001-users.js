exports.seed = function(knex, Promise) {
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      { username: "max", password: "pass" },
      { username: "jim", password: "pass" },
      { username: "greg", password: "pass" },
      { username: "lucy", password: "pass" },
      { username: "alice", password: "pass" }
    ]);
  });
};
