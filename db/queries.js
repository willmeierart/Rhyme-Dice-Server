const knex = require('./knex')

module.exports = {
  getWords: function(sound){
    return knex('sounds')
      .where('sounds.sound', sound)
      .join('words','words.sound','sounds.sound')
      .select('words.word','sounds.sound')
  }
}
