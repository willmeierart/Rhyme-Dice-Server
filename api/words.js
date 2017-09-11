const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/:sound', function(req, res, next) {
  queries.getWords(req.params.sound)
    .then(words=>res.json(words))
})

module.exports = router
