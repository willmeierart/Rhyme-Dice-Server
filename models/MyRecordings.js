const { Model } = require('objection')
// const Recording = require('./Recording')

class MyRecordings extends Model {
  static get tableName(){
    return 'userz'
  }
  static get relationMappings(){
    return {
      recordings: {
        relation: Model.HasManyRelation,
        modelClass: MyRecordings,
        join: {
          from: 'userz.id',
          to: 'recordings.creator_id'
        }
      }
    }

  }
}

module.exports = MyRecordings
