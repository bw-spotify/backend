exports.up = function(knex, Promise) {
  return knex.schema.createTable("songs", tbl => {
    tbl.string("artist_name", 128).notNullable();
    tbl.string("track_id", 128).notNullable();
    tbl.string("track_name", 128).notNullable();
    tbl.float("acousticness").unsigned();
    tbl.float("danceability").unsigned();
    tbl.integer("duration_ms").unsigned();
    tbl.float("energy").unsigned();
    tbl.float("instrumentalness").unsigned();
    tbl.integer("key").unsigned();
    tbl.float("liveness").unsigned();
    tbl.float("loudness");
    tbl.integer("mode").unsigned();
    tbl.float("speechiness");
    tbl.float("tempo");
    tbl.integer("time_signature").unsigned();
    tbl.float("valence");
    tbl.integer("popularity").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("songs");
};
