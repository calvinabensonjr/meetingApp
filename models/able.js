const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const ableSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.models['able'] || mongoose.model('able', ableSchema)