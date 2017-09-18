const { Model } = require('objection')

class Recording extends Model {
  static get tableName(){
    return 'recordings'
  }
  static get relationMappings() {
    return {
      friends_tagged_in: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname+'/User',
        join: {
          from: 'recordings.id',
          through: {
            from: 'friends_tagged.recording_id',
            to: 'friends_tagged.friend_id'
          },
          to: 'userz.id'
        }
      }
    }
  }
}

module.exports = Recording
