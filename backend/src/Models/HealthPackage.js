const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const HealthPackageSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true,
    unique: true
  },
  AnnualFee: {
    type: Number,
    required: true
  },
  DoctorSessionDiscount: {
    type: Number,
    required: true,
    min: 0, // Minimum percentage
    max: 100 // Maximum percentage
  },
  MedicineDiscount: {
    type: Number,
    required: true,
    min: 0, // Minimum percentage
    max: 100 // Maximum percentage
  },
  FamilySubscriptionDiscount: {
    type: Number,
    required: true,
    min: 0, // Minimum percentage
    max: 100 // Maximum percentage
  },
  /*PatientsUsernames:[{
    type: String,
    ref: 'Patient' // This should match the model name you defined for Patient
  }],*/
});

const HealthPackage = mongoose.model("HealthPackage", HealthPackageSchema);
module.exports = HealthPackage;
