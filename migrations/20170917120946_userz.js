exports.up = function(knex, Promise) {
  return knex.schema.createTable('userz', (table)=>{
      table.text('id').primary()
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('userz')
}
