const mongoose = require('mongoose')
const sm2 = require('../lib/sm2')
const moment = require('moment')
moment().format()
let db = require('../db')

let Schema = mongoose.Schema

let cardSchema = new Schema({
  question: {type: String, require: true},
  answer: {type: String, require: true},
  answerPoint: Number,
  interval: Number,
  level: {type: Number, min: 0, max: 5, default: 4},
  eFactor: Number,
  execute_at: Date,
  idUser: { type: Schema.Types.ObjectId, ref: 'User' },
  idDeck: { type: Schema.Types.ObjectId, ref: 'Deck' }
}, {
  timestamps: true
})

cardSchema.post('init', function (card) {
  card.eFactor = sm2.calcNewFactor(2.5, card.answerPoint)
  card.interval = sm2.getInterval(1, card.eFactor)
})

cardSchema.post('save', function (card) {
  card.eFactor = sm2.calcNewFactor(card.eFactor, card.answerPoint)
  card.interval = sm2.getInterval(card.interval, card.eFactor)
})

let Card = mongoose.model('Card', cardSchema)

module.exports = Card
