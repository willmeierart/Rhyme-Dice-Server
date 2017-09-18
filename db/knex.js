const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')
const environmentConfig = config[environment]
const knex = require('knex')
const connection = knex(environmentConfig)
const {Model} = require('objection')
Model.knex(connection)

module.exports = connection
