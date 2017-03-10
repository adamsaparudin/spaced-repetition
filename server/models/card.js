const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let cardSchema = new Schema({
  question: {type: String, require: true},
  answer: {type: String, require: true},
  level: {type: Number, min: 1, max: 5, default: 1}
}, {
  timestamps: true
})

let Card = mongoose.model('Card', cardSchema)

module.exports = Card
