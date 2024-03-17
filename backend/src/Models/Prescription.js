const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    DoctorUsername: {
        type: String,
        required: true,
    },
    PatientUsername: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Filled: {
        type: Boolean,
        default: false,
    },
    Medicines: [{
        Name: {
            type: String,
            required: true,
        },
        dosage: {
            type: Number,
            required: true,
        },
    }],
    TotalAmount: {
        type: Number,
        default: 0
    },
    prescriptionPaymentMethod: {
        type: String,
        enum: ['wallet', 'creditCard'],
        default: 'wallet'
    },
}, { timestamps: true });


function generateRandom4DigitNumber() {
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Prescription = mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;