const express = require('express');
const router = express.Router();
const upload = require('./multer-config');

// controller functions
const registerGuestDoctor= require('../Controllers/guestDoctorController');
const { verify } = require('../Controllers/loginController');


// register route
router.post('/Register', upload.fields([
    { name: 'IDDocument', maxCount: 1 },
    { name: 'MedicalDegreeDocument', maxCount: 1 },
    { name: 'WorkingLicenseDocument', maxCount: 1 },
  ]), registerGuestDoctor)

module.exports = router