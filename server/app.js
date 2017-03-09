const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/spaced-repitition', (err) => {
  err ? console.log('is not connected') : console.log('connected')
})
mongoose.Promise = global.Promise

const cors = require('cors')
const app = express()

let index = require('./routes/index')
let user = require('./routes/user')
let deck = require('./routes/deck')
let card = require('./routes/card')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use('/api', index)
app.use('/api', user)
app.use('/api', deck)
app.use('/api', card)

app.listen(3000)

module.exports = app
