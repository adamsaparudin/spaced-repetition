const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

let index = require('./routes/index')
let api = require('./routes/apis/api')
// let auth = require('./routes/auth')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

// app.use('/auth', auth)
app.use('/api', api.card)
app.use('/api', api.deck)
app.use('/api', api.user)

app.listen(3000)

module.exports = app
