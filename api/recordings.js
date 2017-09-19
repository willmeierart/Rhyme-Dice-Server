const express = require('express')
const router = express.Router()
const dotenv = require('dotenv').config()
const knex = require('../db/knex')
const queries = require('../db/queries')
const axios = require('axios')
const aws = require('aws-sdk')
const S3_BUCKET  = process.env.S3_BUCKET
const Recording = require('../models/Recording')
const User = require('../models/User')


router.get('/', (req,res,next)=>{
  // queries.getRecordings()
  Recording
    .query()
    .then(recordings=>{
      res.json(recordings)
    })
})
router.get('/:id', (req,res,next)=>{
  // queries.getRecordings()
  Recording
    .query()
    .where('id', req.params.id)
    .eager('friends_tagged_in')
    .then(recordings=>{
      res.json(recordings)
    })
})
router.get('/my/:id', (req,res,next)=>{
  User
    .query()
    .where('id', req.params.id)
    .eager('my_recordings')
    .then(recordings=>{
      console.log(recordings);
      res.json(recordings)
    })
})
router.get('/tagged/:id', (req,res,next)=>{
  User
    .query()
    .where('id', req.params.id)
    .eager('tagged_recordings')
    .then(recordings=>{
      res.json(recordings)
    })
})
router.put('/:id', (req,res,next)=>{
  let updateObj = {}
  if (req.params.url) {
    updateObj.url = req.params.url
    updateObj.length = req.params.length
  }
  if (req.params.title) {
    updateObj.title = req.params.title
  }
  Recording
    .query()
    .patch(updateObj)
    .where('id', req.params.id)
    .then(recordings=>{
      res.json(recordings)
    })
})
router.post('/rec', (req,res,next)=>{
  const options = {
    relate: true,
    unrelate: true
  }
  Recording
    .query()
    // .upsertGraph(req.body, options)
    .upsertGraph({
      url:req.body.url,
      title:req.body.title,
      time:req.body.time,
      creator_id:req.body.creator_id,
      favorite:req.body.favorite
    }, options)
    .then(recording=>{
      let friends_tagged = req.body.friends_tagged_in
        .map(friend=>{
          return {
            recording_id: recording.id,
            user_id: req.body.creator_id,
            friend_id: friend.id
          }
        })
      return knex('friends_tagged').insert(friends_tagged)
      .then(response=>res.json(response))

    })
})
router.delete('/rec/:id', (req,res,next)=>{
  Recording
    .query()
    .delete()
    .where('id', req.params.id)
    .then(deleted=>{
      res.json(req.params.id, 'deleted')
    })
})

module.exports = router
