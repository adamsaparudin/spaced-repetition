'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../../controllers/deckController')

router.get('/deck', controller.readDeck)
router.get('/deck/:id', controller.findOneData)
router.post('/deck', controller.createDeck)
router.put('/deck/:id', controller.updateDeck)
router.delete('/deck/:id', controller.removeDeck)

module.exports = router
