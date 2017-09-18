const { Model } = require('objection')

class MyRecordings extends Model {
  static get tableName(){
    return 'userz'
  }
  static relationMappings = {
    genres: {
      relation: Model.HasManyRelation,
      modelClass: MyRecordings,
      join: {
        from: 'userz.id',
        to: 'recordings.creator_id'
      }
    }
  }
}

module.exports = MyRecordings
