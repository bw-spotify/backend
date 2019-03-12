exports.seed = function(knex, Promise) {
  return knex("faves").then(function() {
    // Inserts seed entries
    return knex("faves").insert([
      { user_id: 1, song_id: 1 },
      { user_id: 1, song_id: 2 },
      { user_id: 2, song_id: 19 },
      { user_id: 2, song_id: 18 },
      { user_id: 2, song_id: 17 },
      { user_id: 3, song_id: 17 },
      { user_id: 3, song_id: 5 },
      { user_id: 3, song_id: 1 },
      { user_id: 3, song_id: 15 },
      { user_id: 4, song_id: 4 },
      { user_id: 4, song_id: 3 },
      { user_id: 4, song_id: 9 },
      { user_id: 4, song_id: 18 },
      { user_id: 4, song_id: 17 },
      { user_id: 4, song_id: 15 },
      { user_id: 5, song_id: 10 },
      { user_id: 5, song_id: 13 },
      { user_id: 5, song_id: 1 },
      { user_id: 5, song_id: 12 },
      { user_id: 5, song_id: 11 },
      { user_id: 5, song_id: 15 }
    ]);
  });
};
