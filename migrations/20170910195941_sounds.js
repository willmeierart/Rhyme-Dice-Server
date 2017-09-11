exports.up = function(knex, Promise) {
  return knex.schema.createTable('sounds', (table)=>{
      table.increments('id').primary()
      table.text('sound').notNull()
  })
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('sounds')
}
