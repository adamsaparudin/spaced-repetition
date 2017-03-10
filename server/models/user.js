const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, require: true},
  fb_id: String
}, {
  timestamps: true
})
