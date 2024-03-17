const Patient = require('./Models/Patient');
const GuestDoctor = require('./Models/GuestDoctor');
const Doctor = require('./Models/Doctor');
const Admin = require('./Models/Administrator');

async function isUsernameUnique(username) {
  const patientExists = await Patient.findOne({ Username: username });
  const guestDoctorExists = await GuestDoctor.findOne({ Username: username });
  const doctorExists = await Doctor.findOne({ Username: username });
  const adminExists = await Admin.findOne({ Username: username });
  return !patientExists && !guestDoctorExists && !adminExists && !doctorExists;
}

async function isEmailUnique(email) {
  const patientExists = await Patient.findOne({ Email: email });
  const guestDoctorExists = await GuestDoctor.findOne({ Email: email });
  const doctorExists = await Doctor.findOne({ Email: email });
  const adminExists = await Admin.findOne({ Email: email });
  return !patientExists && !guestDoctorExists && !doctorExists && !adminExists;
}

async function validatePassword(password) {
  // Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
}

module.exports = {
  isEmailUnique,
  isUsernameUnique,
  validatePassword
};
