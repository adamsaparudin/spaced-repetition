'use strict'

const express = require('express')
const router = express.Router()
const card = require('./card')
const user = require('./user')
const deck = require('./deck')

module.exports = {
  card: card,
  user: user,
  deck: deck
}
