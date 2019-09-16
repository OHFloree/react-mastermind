const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  user: {
    type: String,
    default: 'unknown'
  },
  score: {
    type: Number
  }
});

module.exports =  Score = mongoose.model('score', ScoreSchema)
