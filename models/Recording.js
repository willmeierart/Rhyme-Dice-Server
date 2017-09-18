const { Model } = require('objection')

class Recording extends Model {
  static get tableName(){
    return 'recordings'
  }
  static relationMappings = {
    genres: {
      relation: Model.HasManyRelation,
      modelClass: Recording,
      join: {
        from: 'recordings.id',
        through: {
          from: friends_tagged.recording_id,
          to: friends_tagged.friend_id
        },
        to: 'friendz.id'
      }
    }
  }
}

module.exports = Recording
