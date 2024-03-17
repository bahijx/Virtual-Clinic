const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const guestDoctorSchema = new Schema(
  {
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    DateOfBirth: {
      type: Date,
    },
    HourlyRate: {
      type: Number,
      required: true,
    },
    Affiliation: {
      type: String,
      required: true,
    },
    EDB: {
      type: String,
      required: true,
    },
    Speciality: {
      type: String,
      required: true,
      enum: ["dermatology", "Dermatology", "dentistry", "Dentistry", "psychiatry", "Psychiatry", "neurology", "Neurology", "orthopedics", "Orthopedics"]
    },
    IsApproved: {
      type: Boolean,
      default: false,
    },
    IDDocument: {
      data: {
        type: Buffer,
      },
      contentType: {
        type: String,
      },
    },
    MedicalDegreeDocument: {
      data: {
        type: Buffer,
      },
      contentType: {
        type: String,
      },
    },
    WorkingLicenseDocument: {
      data: {
        type: Buffer,
      },
      contentType: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const guestDoctor = mongoose.model("guestDoctor", guestDoctorSchema);
module.exports = guestDoctor;
