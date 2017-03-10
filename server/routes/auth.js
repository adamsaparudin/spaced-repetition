'use strict'

const express = require('express')
const router = express.Router()
const passport = require('passport')
const auth = require('../authentication')
const jwt = require('jsonwebtoken')
const user = require('../controllers/userController')

router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback', passport.authenticate('facebook'), user.signIn)

module.exports = router

// , {
//   failureRedirect: 'index/login'
// }), (req, res) => {
//   console.log(res)
//   console.log(res.req)
//   var token = jwt.sign({}, 'GwGanteng')
//   res.send('sucsess')
// }
