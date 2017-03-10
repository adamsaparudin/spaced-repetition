'use strict'

const express = require('express')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const User = require('./models/user')
require('dotenv').config()

passport.use(new FacebookStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOne({
      fb_id: profile.id
    }).then((data) => {
      if (!data) {
        User.create({
          fb_id: profile.id,
          name: profile.displayName
        }, function (err, user) {
          cb(err)
        })
      } else {
        cb(null, data)
      }
    }).catch((e) => {
      if (e) throw e
    })
  }
))

passport.serializeUser(function (user, cb) {
  cb(null, user)
})
