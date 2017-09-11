exports.seed = function(knex, Promise) {
  return knex('sounds').del()
    .then(function () {
      return knex('sounds').insert([
        {sound: 'a'},
        {sound: 'ah'},
        {sound: 'air'},
        {sound: 'ar'},
        {sound: 'ay'},
        {sound: 'ee'},
        {sound: 'eer'},
        {sound: 'eh'},
        {sound: 'er'},
        {sound: 'i'},
        {sound: 'ie'},
        {sound: 'o'},
        {sound: 'oh'},
        {sound: 'or'},
        {sound: 'oy'},
        {sound: 'uh'},
        {sound: 'ure'}
      ]);
    });
};
