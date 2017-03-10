const mongoose = require('mongoose');

let mongoDB = 'mongodb://127.0.0.1/spaced_repetition_db'
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB Connection error');)
