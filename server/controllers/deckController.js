'use strict'

const express = require('express')
const router = express.Router()
const deck = require('../models/deck')

let createDeck = (req, res, next) => {
  deck.create(req.body).then((data) => {
    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

// let addCardToDeck = (req, res, next) => {
//   deck.findById(req.params.id)
//     .then((deck) => {
//
//       deck.listOfCards.push()
//     })
// }

let readDeck = (req, res, next) => {
  deck.find({})
    .populate('idUser')
    .populate('listOfCards')
    .then((data) => {
      !data ? res.send('Items isEmpty') : res.send(data)
    }).catch((e) => {
    if (e) throw e
  })
}

let updateDeck = (req, res, next) => {
  deck.findById(req.params.id).then((data) => {
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

let removeDeck = (req, res, next) => {
  deck.findById(req.params.id).then((data) => {
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
  deck.findById(req.params.id)
    .populate('idUser')
    .populate('listOfCards')
    .then((data) => {
      if (!data) {
        res.send('Data is not found!')
      } else {
        res.send(data)
      }
    }).catch((e) => {
    if (e) throw e
  })
}

module.exports = {
  readDeck,
  createDeck,
  updateDeck,
  removeDeck,
findOneData}
