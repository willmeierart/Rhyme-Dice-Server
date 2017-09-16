const express = require('express')
const router = express.Router()
const dotenv = require('dotenv').config()
const queries = require('../db/queries')
const axios = require('axios')
const aws = require('aws-sdk')
const S3_BUCKET  = process.env.S3_BUCKET

router.get('/sign-s3', (req, res)=>{
  const s3 = new aws.S3()
  const fileName = req.query['filename']
  const fileType = req.query['filetype']
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }
  s3.getSignedUrl('putObject', s3Params, (err, data)=>{
    if (err) {
      console.log(err)
      return res.end()
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    res.write(JSON.stringify(returnData))
    res.end()
  })
})
router.post('/signed', (req,res,next)=>{
  console.log(req.body);
  axios.put(req.body.url, req.body.file).then(res=>{
    console.log(res.json);
  })
})

router.get('/', (req,res,next)=>{

})

module.exports = router
