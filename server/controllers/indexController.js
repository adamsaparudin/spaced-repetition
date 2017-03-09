'use strict'

const express = require('express')
const router = express.Router()

let HomePage = (req, res, next) => {
  res.render('client/views')
}

module.exports = {
  HomePage
}
