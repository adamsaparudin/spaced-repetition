'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/indexController')

router.get('/home', controller.HomePage)
router.get('/login', (req, res) => {
  res.send('Login Dulu')
})

module.exports = router
