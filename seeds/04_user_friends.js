exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE user_friends RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('user_friends').insert([
        {
          user_id: 946008798883839,
          friend_id: 152079212044542
        },
        {
          user_id: 152079212044542,
          friend_id: 946008798883839
        }
      ])
    })
}
