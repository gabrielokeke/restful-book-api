const mongoose = require('mongoose');

// Author schema
const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio : String
});

module.exports = mongoose.model('Author', authorSchema);