const doctorModel = require('../Models/Doctor.js')
const appointmentSchema = require('../Models/Appointment.js')
const doctorSchema = require('../Models/Doctor.js')
const patientSchema = require('../Models/Patient.js')
const prescriptionModel = require('../Models/Prescription.js')
const mongoose = require('mongoose');

const registerPrescription = async (req, res) => {
    const {
        DoctorUsername,
        PatientUsername,
        Description,
        Date,
        Appointment_ID,
        Filled,
        Dose
    } = req.body

    try {

        const doctorExists = await doctorSchema.findOne({Username: DoctorUsername});
        if(!doctorExists){
            return res.status(400).json("Doctor doesn't exist!");
        }

        const patientExists = await patientSchema.findOne({Username: PatientUsername});
        if(!patientExists){
            return res.status(400).json("Patient doesn't exist!");
        }

        const prescription = await prescriptionModel.register(
            DoctorUsername,
            PatientUsername,
            Description,
            Date,
            Appointment_ID,
            Filled,
            Dose
        )

        await prescription.save();

        patientExists.PatientPrescriptions.push(prescription._id);
        await patientExists.save();
        res.status(200).json({ prescription });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = registerPrescription





