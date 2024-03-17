const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const notificationSchema = new mongoose.Schema({
    type: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  PatientMessage: {
    type: String,
    required: false
  }, 
  DoctorMessage: {
    type: String,
    required: false
  }
});

const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
