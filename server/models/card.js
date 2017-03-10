const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let cardSchema = new Schema({
  question: {type: String, require: true},
  answer: {type: String, require: true},
  answerPoint: Number,
  interval : Number,
  level: {type: Number, min: 0, max: 5, default: 4},
  eFactor: Number,
  idUser : { type: Schema.Types.ObjectId, ref: 'User' },
  idDeck : { type: Schema.Types.ObjectId, ref: 'Deck' }
}, {
  timestamps: true
})

let Card = mongoose.model('Card', cardSchema)

module.exports = Card
