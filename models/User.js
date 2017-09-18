const { Model } = require('objection')

class User extends Model {
  static get tableName(){
    return 'userz'
  }
  static get relationMappings() {
    return {
      tagged_recordings: {
        relation: Model.ManyToManyRelation,
        modelClass: __dirname+'/Recording',
        join: {
          from: 'userz.id',
          through: {
            from: 'friends_tagged.friend_id',
            to: 'friends_tagged.recording_id',
          },
          to: 'recordings.id'
        }
      },
      my_recordings:{
        relation: Model.HasManyRelation,
        modelClass: __dirname+'/Recording',
        join: {
          from: 'userz.id',
          to: 'recordings.creator_id'
        }
      }
    }
  }
}

module.exports = User
