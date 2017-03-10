'use strict'

const express = require('express')
const router = express.Router()
const user = require('../models/user')
const jwt = require('jsonwebtoken')

let createUser = (req, res, next) => {
  user.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readUser = (req, res, next) => {
  user.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateUser = (req, res, next) => {
  user.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not found!')
    } else {
      data.update(req.body).then((result) => {
        res.send(result)
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let removeUser = (req, res, next) => {
  user.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not found!')
    } else {
      data.remove(req.params.id).then((result) => {
        res.send('Data has been deleted')
      }).catch((e) => {
        if (e) throw e
      })
    }
  })
}

let findOneData = (req, res, next) => {
  user.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not found!')
    } else {
      res.send(data)
    }
  }).catch((e) => {
    if (e) throw e
  })
}

let signIn = (req, res, next) => {
  var payload = res.req.user
  var token = jwt.sign({
    name: payload.name,
    fbId: payload.fb_id
  }, 'lalalalala')
  res.redirect('http://127.0.0.1:8080/home.html?q=' + token)
}

module.exports = {
  readUser,
  createUser,
  updateUser,
  removeUser,
  findOneData,
  signIn
}
