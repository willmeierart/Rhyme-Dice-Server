exports.up = function(knex, Promise) {
  return knex.schema.createTable('recordings', (table)=>{
      table.increments('id').primary()
      table.text('url').notNull()
      table.text('title').notNull()
      table.integer('time').notNull()
      table.text('creator_id').notNull().references('userz.id')
      table.boolean('favorite')
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recordings')
}
