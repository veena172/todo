
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: Number,
  role: { type: Number, enum: [0, 1] } // 0 = admin, 1 = client
});
module.exports = mongoose.model('User', userSchema);
