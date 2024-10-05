const mongoose = require('mongoose');

const PaperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Paper', PaperSchema);
