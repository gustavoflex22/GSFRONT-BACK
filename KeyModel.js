const mongoose = require('mongoose');

const KeySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Key = mongoose.model('Key', KeySchema);
module.exports = Key;