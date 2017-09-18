exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE friends_tagged RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('friends_tagged').insert([
        {
          recording_id:1,
          user_id: 946008798883839,
          friend_id: 152079212044542
        },
        {
          recording_id:2,
          user_id: 152079212044542,
          friend_id: 946008798883839
        }
      ])
    })
}
