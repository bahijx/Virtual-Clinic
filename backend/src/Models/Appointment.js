const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const appointmentSchema = new Schema({
  Date: {
    type: Date,
    required: true
  },
  DoctorUsername: {
    type: String,
    ref: 'Doctor'
  },
  PatientUsername: {
    type: String,
    ref: 'Patient'
  },
  Status: {
    type: String,
    default: "Upcoming",
    enum: ["Upcoming", "upcoming", "Completed", "completed", "Cancelled", "cancelled", "Rescheduled", "rescheduled", "Follow-up", "follow-up", "Requested", "requested"]
  },
  PaymentMethod: {
    type: String,
    default: "card",
    enum: ["wallet", "card", null]
  },
  Price: {
    type: Number,
    required: true
  },
  Time: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  ForPatient: {
    type: Boolean,
    default: false,
    required: true
  }
}, { timestamps: true })

appointmentSchema.statics.register = async function (
  Date,
  DoctorUsername,
  PatientUsername,
  Status,
  Price,
  Time,
  Name
) {

  // validation 
  if (!Date ||
    !PatientUsername ||
    !DoctorUsername ||
    !Status ||
    !Price ||
    !Time ||
    !Name) {
    throw Error('All fields must be filled.');
  }
  const appointment = await this.create({
    Date,
    DoctorUsername,
    PatientUsername,
    Status,
    Price,
    Time,
    Name
  });

  return appointment;
};
const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;