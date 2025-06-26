const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true, // createdAt, updatedAt
});

module.exports = mongoose.model('Task', TaskSchema);
