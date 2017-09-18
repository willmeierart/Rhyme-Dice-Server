exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_friends', (table)=>{
      table.increments('id').primary()
      table.text('user_id').notNull().references('userz.id').onDelete('cascade')
      table.text('friend_id').notNull().references('userz.id').onDelete('cascade')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user_friends')
}
