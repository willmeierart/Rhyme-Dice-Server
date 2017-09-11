exports.up = function(knex, Promise) {
  return knex.schema.createTable('words', (table)=>{
      table.increments('id').primary()
      table.text('word').notNull()
      table.text('sound').references('sounds.sound')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('words')
}
