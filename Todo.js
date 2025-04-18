
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  task: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Todo', todoSchema);
