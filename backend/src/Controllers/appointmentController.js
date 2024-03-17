const appointmentModel = require('../Models/Appointment.js');
const doctorSchema = require('../Models/Doctor.js');
const patientSchema = require('../Models/Patient.js');
const { default: mongoose } = require('mongoose');
const ObjectID = require('mongodb').ObjectID;

// register appointment
const registerAppointment = async (req, res) => {
    const { 
        Date,
        DoctorUsername,
        PatientUsername,
        Status,
        Price,
        Time
    } = req.body;

    try {

        const doctorExists = await doctorSchema.findOne({Username: DoctorUsername});
        if(!doctorExists){
            return res.status(400).json("Doctor doesn't exist!");
        }

        const patientExists = await patientSchema.findOne({Username: PatientUsername});
        if(!patientExists){
            return res.status(400).json("Patient doesn't exist!");
        }
        
        const appointment = await appointmentModel.register(
            Date,
            DoctorUsername,
            PatientUsername,
            Status,
            Price,
            Time
          );
        await appointment.save();

        doctorExists.PatientsUsernames.push(patientExists.Username);
        await doctorExists.save();
        res.status(200).json({appointment})
    } catch(error) {
        res.status(400).json({ error: error.message})
    }
}

module.exports = registerAppointment;


