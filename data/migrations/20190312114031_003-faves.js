exports.up = function(knex, Promise) {
  return knex.schema.createTable("faves", tbl => {
    tbl.increments();

    tbl.unique(["user_id", "song_id"]);

    tbl
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("restrict")
      .onUpdate("cascade");

    tbl
      .integer("song_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("songs")
      .onDelete("restrict")
      .onUpdate("cascade");

    tbl.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("faves");
};
