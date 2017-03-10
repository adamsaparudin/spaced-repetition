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
  howManyExecuted: Number,
  execute_at: Date,
  idUser: { type: Schema.Types.ObjectId, ref: 'User' },
  idDeck: { type: Schema.Types.ObjectId, ref: 'Deck' }
}, {
  timestamps: true
})

// cardSchema.post('init', function (card) {
//   card.eFactor = sm2.calcNewFactor(2.5, card.level)
//   card.interval = sm2.getInterval(1, card.eFactor)
//   card.execute_at = moment().add(card.interval , 'd')
//   // console.log(card.interval)
//   card.howManyExecuted = 1
//   card.save()
// })
//
// cardSchema.pre('save', function (next) {
//   this.howManyExecuted += 1
//   next()
// })

// cardSchema.post('save', function (card, next) {
//   card.howManyExecuted += 1
//   card.eFactor = sm2.calcNewFactor(card.eFactor, card.level)
//   card.interval = sm2.getInterval(card.howManyExecuted, card.eFactor)
//   card.execute_at = moment(card.execute_at).add(card.interval , 'days')
//   card.save()
//   next()
// })

let Card = mongoose.model('Card', cardSchema)

module.exports = Card
