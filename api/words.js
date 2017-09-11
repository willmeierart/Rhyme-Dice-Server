const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get('/:sound', function(req, res, next) {
  queries.getWords(req.params.sound)
    .then(wds=>{
      console.log(wds);
      let numbers = []
      const count = wds.length>25 ? 25 : wds.length
      for (let i=0; i<count; i++){
        numbers.push(Math.floor(Math.random()*wds.length))
      }
      console.log(numbers);
      const randomSet = numbers.map(num=>{
        console.log(wds[num]);
        return wds[num]
      })
      console.log(randomSet);
      return res.json(randomSet)
    })
})

module.exports = router
