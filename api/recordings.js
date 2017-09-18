const express = require('express')
const router = express.Router()
const dotenv = require('dotenv').config()
const queries = require('../db/queries')
const axios = require('axios')
const aws = require('aws-sdk')
const S3_BUCKET  = process.env.S3_BUCKET
const Recording = require('../models/Recording')
const MyRecordings = require('../models/MyRecordings')
const TaggedRecordings = require('../models/TaggedRecordings')


router.get('/', (req,res,next)=>{
  // queries.getRecordings()
  Recording
    .query()
    .then(recordings=>{
      res.json(recordings)
    })
})
router.post('/', (req,res,next)=>{

})

// router.post('/', (req,res,next)=>{
//
// })
// router.put('/:name', (req,res,next)=>{
//
// })

router.get('/my/:id', (req,res,next)=>{
  MyRecordings
    .query()
    .eager('recordings')
    .where('id', req.params.id)
    .then(recordings=>{
      res.json(recordings)
    })
})
router.get('/tagged/:id', (req,res,next)=>{
  Recording
    .query()
    .eager('recordings')
    .then(recordings=>{
      res.json(recordings)
    })
})
router.put('/rec/:id', (req,res,next)=>{
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
    .upsertgraph(req.body, options)
    .then(recording=>{
      res.json(recording)
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

// router.get('/sign-s3', (req, res)=>{
//   const s3 = new aws.S3()
//   const fileName = req.query['filename']
//   const s3Params = {
//     Bucket: S3_BUCKET,
//     Key: fileName,
//     Expires: 60,
//     ACL: 'public-read'
//   }
//   s3.getSignedUrl('putObject', s3Params, (err, data)=>{
//     if (err) {
//       console.log(err)
//       return res.end()
//     }
//     const returnData = {
//       signedRequest: data,
//       url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
//     }
//     res.write(JSON.stringify(returnData))
//     res.end()
//   })
// })


module.exports = router
