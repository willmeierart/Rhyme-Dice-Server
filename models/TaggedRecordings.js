const { Model } = require('objection')

class TaggedRecordings extends Model {
  static get tableName(){
    return 'userz'
  }
  static relationMappings = {
    genres: {
      relation: Model.HasManyRelation,
      modelClass: TaggedRecordings,
      join: {
        from: 'userz.id',
        through: {
          from: friends_tagged.friend_id,
          to: friends_tagged.recording_id
        },
        to: 'recordings.id'
      }
    }
  }
}

module.exports = TaggedRecordings
