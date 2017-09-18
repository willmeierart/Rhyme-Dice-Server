const knex = require('./knex')

module.exports = {
  getWords: function(sound){
    return knex('sounds')
      .where('sounds.sound', sound)
      .join('words','words.sound','sounds.sound')
      .select('words.word','sounds.sound')
  },
  getRecordings: function(){
    return knex('recordings')
      .join('friends_tagged','friends_tagged.recording_id','recordings.id')
      .select('')
  },
  getTaggedRecordings: function(id){
    return knex('recordings')
      .join('friends_tagged','friends_tagged.recording_id','recordings.id')
      .select('')
  }
}
