'use strict'

const express = require('express')
const router = express.Router()
const card = require('../models/card')

let createCard = (req, res, next) => {
  card.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let readCard = (req, res, next) => {
  card.find({}).then((data) => {
    !data ? res.send('Items isEmpty') : res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

let updateCard = (req, res, next) => {
  card.findById(req.params.id).then((data) => {
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

let removeCard = (req, res, next) => {
  card.findById(req.params.id).then((data) => {
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
  card.findById(req.params.id).then((data) => {
    if (!data) {
      res.send('Data is not found!!')
    } else {
      res.send(data)
    }
  }).catch((e) => {
    if (e) throw e
  })
}

module.exports = {
  readCard,
  createCard,
  updateCard,
  removeCard,
  findOneData
}
