const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  tid: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: String,
completed: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Task', TaskSchema);
