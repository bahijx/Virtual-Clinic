const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const ContractSchema = new Schema(
    { DoctorUsername:{
        type: String,
        ref: 'Doctor',
        required: true
    },
    MarkUp:{
        type: Number,
        required: true
    },
    StartDate:{
        type: Date,
        required: true
    },
    EndDate:{ 
        type: Date,
        required: true
    },
    DoctorSpecialty:{
        type: String,
        required: true,
        enum:["dermatology","dentistry","psychiatry","neurology","orthopedics","Dermatology","Dentistry","Psychiatry","Neurology","Orthopedics"]

    },
    Salary:{
        type: Number,
        required: true
    },
    compensation:{
        type: Number,
        required: true
    },
    workingHours:{
        type: Number,
        required: true
    },
    workingDays:{
        type: Number,
        required: true
    },
    Type:{
        type: String,
        //required: true,
        enum: ['Full Time', 'Part Time'],
        default: 'Full Time'
    },
    Status:{
        type: String,
       // required: true,
        enum: ['Approved', 'Rejected', 'Pending' , 'accepted'],
        default: 'Pending'
    },}
, { timestamps: true});

const Contract = mongoose.model('Contract', ContractSchema);
module.exports = Contract;