const express = require('express')
const app = express()
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv').config()
const words = require('./api/words')
const recordings = require('./api/recordings')
// const users = require('./api/users')


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3001'
}))

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/words', words)
app.use('/recordings', recordings)
// app.use('/users', users)

app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404;
  next(err);
})

app.use(function(err, req, res, next) {
  res.status(500)
  // res.status(err.status || res.statusCode || 500)
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

module.exports = app
