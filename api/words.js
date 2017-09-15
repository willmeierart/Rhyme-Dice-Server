const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/:sound', (req, res, next)=>{
  queries.getWords(req.params.sound)
    .then(wds=>{
      let numbers = []
      const count = wds.length>25 ? 25 : wds.length
      for (let i=0; i<count; i++){
        numbers.push(Math.floor(Math.random()*wds.length))
      }
      const randomSet = numbers.map(num=>({[req.params.sound] : wds[num].word}))
      return res.json({"word":randomSet})
    })
})

module.exports = router
