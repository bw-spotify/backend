exports.seed = function(knex, Promise) {
  return knex("faves").then(function() {
    // Inserts seed entries
    return knex("faves").insert([
      { user_id: 1, song_id: "2RM4jf1Xa9zPgMGRDiht8O" },
      { user_id: 1, song_id: "1tHDG53xJNGsItRA3vfVgs" },
      { user_id: 2, song_id: "3J2Jpw61sO7l6Hc7qdYV91" },
      { user_id: 2, song_id: "5eIyK73BrxHLnly4F9PWqg" },
      { user_id: 2, song_id: "13Mf2ZBpfNkgWJowvM5hXh" }
      // { user_id: 3, song_id: "13Mf2ZBpfNkgWJowvM5hXh" },
      // { user_id: 3, song_id: "13Mf2ZBpfNkgWJowvM5hXh" },
      // { user_id: 3, song_id: "2RM4jf1Xa9zPgMGRDiht8O" },
      // { user_id: 3, song_id: "13Mf2ZBpfNkgWJowvM5hXh" },
      // { user_id: 4, song_id: "7BQaRTHk44DkMhIVNcXy2D" },
      // { user_id: 4, song_id: "6Wosx2euFPMT14UXiWudMy" },
      // { user_id: 4, song_id: "049RxG2laEl9U1PGYeIqLV" },
      // { user_id: 4, song_id: "3J2Jpw61sO7l6Hc7qdYV91" },
      // { user_id: 4, song_id: "2jbYvQCyPgX3CdmAzeVeuS" },
      // { user_id: 4, song_id: "118GQ70Sp6pMqn6w1oKuki" },
      // { user_id: 5, song_id: "118GQ70Sp6pMqn6w1oKuki" },
      // { user_id: 5, song_id: "26Y1lX7ZOpw9Ql3gGAlqLK" },
      // { user_id: 5, song_id: "2RM4jf1Xa9zPgMGRDiht8O" },
      // { user_id: 5, song_id: "26Y1lX7ZOpw9Ql3gGAlqLK" },
      // { user_id: 5, song_id: "26Y1lX7ZOpw9Ql3gGAlqLK" },
      // { user_id: 5, song_id: "5eIyK73BrxHLnly4F9PWqg" }
    ]);
  });
};
