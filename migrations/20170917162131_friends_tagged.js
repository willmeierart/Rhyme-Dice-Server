exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends_tagged', (table)=>{
      table.increments('id').primary()
      table.integer('recording_id').notNull().references('recordings.id').onDelete('cascade')
      table.text('user_id').notNull().references('userz.id').onDelete('cascade')
      table.text('friend_id').notNull().references('userz.id').onDelete('cascade')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('friends_tagged')
}
