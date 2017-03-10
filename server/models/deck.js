const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let deckSchema = new Schema({
  name: {type: String, require: true},
  idUser: { type: Schema.Types.ObjectId, ref: 'User' },
  listOfCards: [ { type: Schema.Types.ObjectId, ref: 'Card' } ]
}, {
  timestamps: true
})

let Deck = mongoose.model('Deck', deckSchema)

module.exports = User
