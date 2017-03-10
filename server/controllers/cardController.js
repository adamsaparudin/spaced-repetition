'use strict'

const express = require('express')
const router = express.Router()
const card = require('../models/card')
const sm2 = require('../lib/sm2')
const moment = require('moment')
moment().format()

let createCard = (req, res, next) => {
  let eFactor = sm2.calcNewFactor(2.5, req.body.level)
  let interval = sm2.getInterval(1, eFactor)
  card.create({
    eFactor: eFactor,
    interval: interval,
    execute_at: moment().add(interval , 'd'),
    answer: req.body.answer,
    question: req.body.question,
    level: req.body.level,
    idUser: req.body.idUser,
    idDeck: req.body.idDeck,
    howManyExecuted: 1
  }).then((data) => {
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
      let newHowManyExecuted = data.howManyExecuted + 1
      let newEfactor = sm2.calcNewFactor(data.eFactor, req.body.level)
      let newInterval = sm2.getInterval(newHowManyExecuted, sm2.calcNewFactor(data.eFactor, req.body.level))
      console.log(newEfactor)
      console.log(newInterval)
      console.log(newHowManyExecuted)
      data.update({
        howManyExecuted: newHowManyExecuted,
        level: req.body.level,
        eFactor: newEfactor,
        interval: newInterval,
        execute_at: moment(data.execute_at).add(newInterval, 'days')
      }).then((result) => {
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

let nextExecute = (req, res, next) => {
  card.find({
    execute_at: {$gt: moment()}
  }).limit(10).then((data) => {
    // !data ? res.send('Items isEmpty') : res.send(data)
    // let willExecute = data.filter(function (card) {
    //   return card.execute_at > moment()
    // })

    res.send(data)
  }).catch((e) => {
    if (e) throw e
  })
}

module.exports = {
  readCard,
  createCard,
  updateCard,
  removeCard,
  findOneData,
nextExecute}
