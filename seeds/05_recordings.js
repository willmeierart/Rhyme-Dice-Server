const recordings = require('../data/recordings')

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE recordings RESTART IDENTITY CASCADE;')
    .then(function () {
      return knex('recordings').insert(recordings)
    })
}
