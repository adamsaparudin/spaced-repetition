'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/indexController')

router.get('/home', controller.HomePage)

module.exports = router
