'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../../controllers/userController')

router.get('/user', controller.readUser)
router.get('/user/:id', controller.findOneData)
router.post('/user', controller.createUser)
router.put('/user/:id', controller.updateUser)
router.delete('/user/:id', controller.removeUser)

module.exports = router
