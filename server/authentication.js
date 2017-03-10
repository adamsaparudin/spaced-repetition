'use strict'

const express = require('express')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/user')

passport.use(new FacebookStrategy({
  clientID: '190233801464815',
  clientSecret: '2fed281ec8d8b6aba6a06b9d771a4c60',
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({
      facebookId: profile.id
    }, function (err, user) {
      return cb(err, user)
    })
  }
))
