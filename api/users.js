const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router
