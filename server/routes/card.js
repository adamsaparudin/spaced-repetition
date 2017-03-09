'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/cardController')

router.get('/card', controller.readCard)
router.get('/card/:id', controller.findOneData)
router.post('/card', controller.createCard)
router.put('/card/:id', controller.updateCard)
router.delete('/card/:id', controller.removeCard)

module.exports = router
