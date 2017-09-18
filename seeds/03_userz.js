exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE userz RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('userz').insert([
        {id: 946008798883839},
        {id: 152079212044542}
      ])
    })
}
