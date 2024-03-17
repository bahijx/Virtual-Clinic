const { default: mongoose } = require("mongoose");
const appointmentSchema = require('../Models/Appointment.js');
const doctorSchema = require('../Models/Doctor.js');
const patientSchema = require('../Models/Patient.js');
const contractSchema = require('../Models/Contract.js');
const Prescription = require('../Models/Prescription.js');
const Appointment = require("../Models/Appointment.js");
const Medicine = require("../Models/Medicine.js");
const Notification = require("../Models/notifications.js");
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const axios = require('axios'); // for making HTTP requests

const {SendEmailNotificationCancel,
  SendEmailNotificationCancelFam,
  SendEmailNotificationReschedule,
  SendEmailNotificationRescheduleFam} = require('../Controllers/patientController.js');


//Req 14(edit/ update my email, hourly rate or affiliation (hospital))
const updateDoctorByEmail = async (req, res) => {
  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).json({ error: "This doctor doesn't exist!" })
      }

      const updatedDoc = {
        $set: {
          Email: req.body.Email
        },
      };

      const updated = await doctorSchema.updateOne({ Username: Username }, updatedDoc);
      const doc = await doctorSchema.findOne({ Username: Username });
      res.status(200).json({ doc });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const updateDoctorByHourlyRate = async (req, res) => {

  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {

      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).json({ error: "This doctor doesn't exist!" })
      }

      const updatedDoc = {
        $set: {
          HourlyRate: req.body.HourlyRate
        },
      };

      const updated = await doctorSchema.updateOne({ Username: Username }, updatedDoc);
      const doc = await doctorSchema.findOne({ Username: Username });
      res.status(200).json({ doc });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

const updateDoctorByAffiliation = async (req, res) => {

  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).json({ error: "This doctor doesn't exist!" })
      }

      const updatedDoc = {
        $set: {
          Affiliation: req.body.Affiliation
        },
      };

      const updated = await doctorSchema.updateOne({ Username: Username }, updatedDoc);
      const doc = await doctorSchema.findOne({ Username: Username });
      res.status(200).json({ doc });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

//Req 23 (filter appointments by date/status)
const docFilterAppsByDate = async (req, res) => {

  const { Username, Date } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).json({ error: "This doctor doesn't exist!" })
      }
      // Use the filter object to query the appointment collection
      const filteredAppointments = await appointmentSchema.find({ DoctorUsername: Username, Date: Date });

      if (filteredAppointments.length === 0) {
        return res.status(404).send('No matching appointments found');
      }
      // Send the list of matching appointments as a response
      res.send(filteredAppointments);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

const docFilterAppsByStatus = async (req, res) => {

  const { Username, Status } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {

      const user = await doctorSchema.findOne({ Username: Username });
      if (!user) {
        return res.status(404).send('No doctor found');
      }

      // Use the filter object to query the appointment collection
      const filteredAppointments = await appointmentSchema.find({ DoctorUsername: Username, Status: Status });

      if (filteredAppointments.length === 0) {
        return res.status(404).send('No matching appointments found');
      }

      // Send the list of matching appointments as a response
      res.status(200).send({ filteredAppointments });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

const allAppointmentsDoc = async (req, res) => {
  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const user = await doctorSchema.findOne({ Username: Username });
      if (!user) {
        return res.status(404).send('No doctor found');
      }

      // Use the filter object to query the appointment collection
      const filteredAppointments = await appointmentSchema.find({ DoctorUsername: Username });

      if (filteredAppointments.length === 0) {
        return res.status(404).send('No matching appointments found');
      }

      // Send the list of matching appointments as a response
      res.status(200).send(filteredAppointments);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

//Req 25 (view information and health records of patient registered with me)
const viewInfoAndRecords = async (req, res) => {

  const { DoctorUsername, PatientUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {

      // Find the doctor by ID
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }

      const patientsUsernames = doctor.PatientsUsernames; // Assuming it's an array of patient IDs

      // Find all patients whose IDs are in the patientIds array
      const patients = await patientSchema.findOne({ Username: PatientUsername });

      if (!patients) {
        return res.status(404).send('No patients found for this doctor');
      }

      // You can send the list of patients and their health records as a response
      res.status(200).send(patients);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

//Req 33 (view a list of all my patients)
const MyPatients = async (req, res) => {

  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      // Find the doctor by ID
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }

      const patientsUsernames = doctor.PatientsUsernames;
      // console.log(doctor.PatientsUsernames) 
      // Assuming it's an array of patient IDs

      // Find all patients whose IDs are in the patientIds array
      const patients = await patientSchema.find({ Username: { $in: patientsUsernames } });

      if (patients.length === 0) {
        return res.status(404).send('No patients found for this doctor');
      }

      const appointments = await appointmentSchema.find({ PatientUsername: { $in: patientsUsernames } });

      
      const result = [];
      for (const patient of patients) {
        for (const app of appointments) {
          if (app.PatientUsername === patient.Username) {
            result.push({
              Name: patient.Name,
              Username: patient.Username,
              Email: patient.Email,
              DateOfBirth: patient.DateOfBirth,
              Appointment_Status: app.Status
            });
            break;
          }
        }
      }
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

//Req 34 (search for a patient by name)
const PatientByName = async (req, res) => {

  const { Username, Name } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      // Find patients with the given name
      const doc = await doctorSchema.findOne({ Username: Username });
      if (!doc) {
        return res.status(404).send("Doctor doesn't exist!");
      }

      const patients = await patientSchema.findOne({ Name: Name });

      if (!patients) {
        return res.status(404).send('No patients found with this name');
      }

      // Send the list of patients with matching names as a response
      res.status(200).send(patients);
    } catch (error) {
      res.status(500).send({ eror: error.message });
    }
  }
}

//Req 35 (filter patients based on upcoming appointments)
const PatientsUpcoming = async (req, res) => {

  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      // Find the doctor by ID
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }

      const patientsUsernames = doctor.PatientsUsernames; // Assuming it's an array of patient IDs

      // Find upcoming appointments for the doctor
      const upcomingAppointments = await appointmentSchema.find({
        DoctorUsername: Username,
        Status: { $in: ["Upcoming", "Follow-up", "upcoming", "follow-up"] }, // Adjust this condition based on your schema
        PatientUsername: { $in: patientsUsernames }
      }, { PatientUsername: 1, Date: 1, Status: 1, _id: 0 });

      if (upcomingAppointments.length === 0) {
        return res.status(404).send('No upcoming appointments found for this doctor');
      }

      // Find the patients based on the patient IDs from appointments
      /*const patients = await patientSchema.find(
        { Username: { $in: upcomingAppointments.PatientUsername}}
        );

      // Extract patient names and send them as an array
      const patientNames = upcomingAppointments.map(
        (PatientUsername) => 
        (PatientUsername));*/

      res.send(upcomingAppointments);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
}

//Req 36 (select a patient from the list of patients)
const selectPatientWithHisName = async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  const { DoctorId, Username } = req.params;

  // Find the doctor by ID
  const doctor = await doctorSchema.findById(DoctorId);

  if (!doctor) {
    return res.status(404).send('Doctor not found');
  }
  if (!(req.user.Username === doctor.Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      // Find patients with the given name
      const patient = await patientSchema.findOne({ Username: Username });

      if (!patient) {
        return res.status(404).send('No patient found with this username');
      }

      // Send the list of patients with matching names as a response
      res.send(patient);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
}


const addDoctor = async (req, res) => {
  const doc = new doctorSchema({
    Username: 'SobhyInjection3',
    Name: 'sobhyy',
    Email: 'SobhyInjection@icloud.comm23',
    Password: '12345',
    DateOfBirth: '2023-10-05',
    HourlyRate: 77,
    Affiliation: 'Tagamo3',
    EDB: 'homarrr',
    patients: ['651e02202d5bf34b78d9ae71', '651ecb157de4aa33de984688'],
    Speciality: 'Derma'
  });

  doc.save().then((result) => {
    res.send(result)
  }).catch((err) => {
    console.log(err);
  });
}

const viewContract = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctorExists = await doctorSchema.findOne({ Username: DoctorUsername });
      if (!doctorExists) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }
      const contractDetails = await contractSchema.findOne({ DoctorUsername });

      if (!contractDetails) {
        return res.status(404).json({ error: "Contract not found for this doctor." });
      }
      res.status(200).json({ contract: contractDetails });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
  }
};

const acceptContract = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctorExists = await doctorSchema.findOne({ Username: DoctorUsername });
      if (!doctorExists) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }
      const contractDetails = await contractSchema.findOne({ DoctorUsername });
      if (contractDetails.Status === 'accepted') {
        return res.status(404).json({ error: "Contract already accepted." });
      }
      const updatedContract = await contractSchema.findOneAndUpdate({ DoctorUsername: DoctorUsername }, { Status: 'accepted' }, { new: true });

      if (!updatedContract) {
        return res.status(404).json({ error: "Contract not found for this doctor." });
      }

      res.status(200).json({ message: 'Contract accepted successfully', contract: updatedContract });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
  }
};
const rejectContract = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctorExists = await doctorSchema.findOne({ Username: DoctorUsername });
      if (!doctorExists) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }
      const contractDetails = await contractSchema.findOne({ DoctorUsername });
      if (contractDetails.Status === 'accepted') {
        return res.status(404).json({ error: "Contract already accepted." });
      }
      const updatedContract = await contractSchema.findOneAndUpdate({ DoctorUsername: DoctorUsername }, { Status: 'Rejected' }, { new: true });

      if (!updatedContract) {
        return res.status(404).json({ error: "Contract not found for this doctor." });
      }
      await doctorSchema.deleteOne({ Username: DoctorUsername });

      res.status(200).json({ message: 'Contract rejected and doctor removed from the database', contract: updatedContract });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
  }
};

//Req 67: view Wallet amount
const viewWalletAmountByDoc = async (req, res) => {

  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      const doc = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doc) {
        return res.status(404).send("No doctor found");
      }

      res.status(200).json(doc.WalletAmount);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
};

// Req 24 viewing the health records of a patient

const viewHealthRecords = async (req, res) => {
  const { DoctorUsername, PatientUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      // Check if the patient is in the doctor's list of patients
      if (!doctor.PatientsUsernames.includes(PatientUsername)) {
        return res.status(404).json({ error: 'Patient not found in the doctor\'s list of patients.' });
      }

      const patient = await patientSchema.findOne({ Username: PatientUsername });

      if (!patient) {
        return res.status(404).json({ error: 'Patient not found.' });
      }

      // Retrieving the health records
      const healthRecords = patient.HealthRecords;

      if (healthRecords.length === 0) {
        return res.status(404).json({ message: 'No health records found for the patient.' });
      }

      // Sending the health records in the response
      res.status(200).json({ healthRecords });
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error.message });
    }
  }
};


// Req 60 Add new health record for a patient

const addHealthRecordForPatient = async (req, res) => {
  const { DoctorUsername, PatientUsername } = req.params;
  const { Date, Description, Diagnosis, Medication } = req.body;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      // Check if the doctor exists
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      // Check if the doctor has the patient in their list
      if (!doctor.PatientsUsernames.includes(PatientUsername)) {
        return res.status(404).json({ error: 'Patient not found in the doctor\'s list of patients.' });
      }

      // Retrieve the patient by their username
      const patient = await patientSchema.findOne({ Username: PatientUsername });

      if (!patient) {
        return res.status(404).json({ error: 'Patient not found.' });
      }

      // Create a new health record object based on your model structure
      const healthRecord = {
        Date: Date,
        Description: Description,
        Diagnosis: Diagnosis,
        Medication: Medication,
      };

      // Add the new health record to the patient's healthRecords array
      patient.HealthRecords.push(healthRecord);
      await patient.save();

      res.status(200).json({ message: 'New health record added for the patient.', patient });
    } catch (error) {
      res.status(500).json({ error: 'Server error', details: error.message });
    }
  }
};


// req 17 add availableTimeSlots

const addAvailableTimeSlots = async (req, res) => {
  const { DoctorUsername } = req.params;
  const { date, time } = req.body; // Assuming availableTimeSlots is an array of time slots

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      const slots = doctor.AvailableTimeSlots;
      var found = false;

      const newDate = new Date(date);

      for (const slot of slots) {
        if (!found) {

          if (slot.Date.getTime() === newDate.getTime() && slot.Time === Number(time)) {
            found = true;
            return res.status(404).send("Already added Slot in your Schedule");
          }
        }
      }

      // Add the received availableTimeSlots to the doctor's existing availableTimeSlots array
      if (!found) {
        doctor.AvailableTimeSlots.push({ Date: date, Time: time, Status: "available" });
      }
      await doctor.save();

      res.status(200).json(doctor.AvailableTimeSlots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const allAvailableTimeSlots = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      res.status(200).json(doctor.AvailableTimeSlots);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

// 51 schedule a follow-up for a patient
const scheduleFollowUp = async (req, res) => {
  const { DoctorUsername, PatientUsername } = req.params;
  const { date, time } = req.body;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {

    try {
      // Check if the doctor and patient are associated
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ error: 'DOCTOR NOT FOUND' });
      }

      const patient = await patientSchema.findOne({ Username: PatientUsername });

      if (!patient) {
        return res.status(404).json({ error: 'Patient not found' });
      }

      const slots = doctor.AvailableTimeSlots;
      var found = false;

      const newDate = new Date(date);

      for (const slot of slots) {
        if (!found) {
          if ((slot.Date.getTime() === newDate.getTime()) && (slot.Time === Number(time)) && (slot.Status === "available")) {
            found = true;
            slot.Status = "booked",
              doctor.save();
            console.log("Added a follow up");
          }
        }
      }

      const newAppointment = await appointmentSchema.create({
        Date: date,
        Time: time,
        DoctorUsername: DoctorUsername,
        PatientUsername: PatientUsername,
        Status: "Follow-up",
        PaymentMethod: null,
        Price: 0,
        Name: patient.Name
      });
      return res.status(200).send(newAppointment);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};


const doctorPastApp = async (req, res) => {

  const { Username } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === Username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      // Find the doctor by ID
      const doctor = await doctorSchema.findOne({ Username: Username });

      if (!doctor) {
        return res.status(404).send('Doctor not found');
      }

      const patientsUsernames = doctor.PatientsUsernames; // Assuming it's an array of patient IDs

      // Find upcoming appointments for the doctor
      const pastAppointments = await appointmentSchema.find({
        DoctorUsername: Username,
        Status: { $in: ["Finished", "Follow-up", "finished", "follow-up"] }, // Adjust this condition based on your schema
        PatientUsername: { $in: patientsUsernames }
      }, { PatientUsername: 1, Date: 1, Status: 1, _id: 0, Time: 1 });

      if (pastAppointments.length === 0) {
        return res.status(404).send('No upcoming appointments found for this doctor');
      }

      res.send(pastAppointments);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }
};

const createAvailableApps = async (req, res) => {
  const { DoctorUsername } = req.params;
  const { Date, Time, Price } = req.body;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      const newApp = Appointment.create({
        DoctorUsername: DoctorUsername,
        Date: Date,
        Price: Price,
        Time: Time,
        Status: "Available"
      })

      await newApp.save();
      res.status(200).json({ message: 'Available Appointment added successfully', appointment: newApp });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};


//Req 53: add/update dosage for each medicine added to the prescription 
const updateMedicineDosage = async (req, res) => { // NEED TO RECHECK
  const { DoctorUsername, prescriptionId, medicineName } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const { newDosage } = req.body;

    if (!DoctorUsername || !prescriptionId || !medicineName || newDosage === undefined) {
      return res.status(400).json({ error: 'Required parameters are missing.' });
    }

    const prescription = await Prescription.findOne({
      _id: prescriptionId,
      DoctorUsername: DoctorUsername
    });

    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found.' });
    }

    // Find the specific medicine within the prescription
    const medicineToUpdate = prescription.Medicines.find(med => med.Name === medicineName);

    if (!medicineToUpdate) {
      return res.status(404).json({ error: 'Medicine not found in the prescription.' });
    }

    // Update the dosage
    medicineToUpdate.dosage = newDosage;

    const updatedPrescription = await prescription.save();

    return res.status(200).json({ success: 'Medicine dosage updated successfully.', updatedPrescription });
  } catch (error) {
    return res.status(500).json({ error: `Error updating medicine dosage: ${error.message}` });
  }
};


//Req 59: download selected prescription (PDF) 
const downloadPrescriptionPDF = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const { DoctorUsername, prescriptionID } = req.params;
  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      if (!mongoose.Types.ObjectId.isValid(prescriptionID)) {
        return res.status(404).json({ error: 'Invalid prescription ID.' });
      }

      const prescription = await Prescription.findById({ _id: prescriptionID });

      if (!prescription || prescription.length === 0) {
        return res.status(404).json({ error: 'No prescription found with this Id.' });
      }

      // Ensure the directory exists
      const directoryPath = path.join(__dirname, 'pdfs');
      if (!fs.existsSync(directoryPath)) {
        fs.mkdirSync(directoryPath);
      }

      // Resolve the full file path
      const filePath = path.resolve(directoryPath, 'prescription.pdf');

      const pdfDoc = new PDFDocument();
      const writeStream = fs.createWriteStream(filePath);
      pdfDoc.pipe(writeStream);

      // Customize the content of the PDF based on your prescription data
      pdfDoc.text(`Prescription ID: ${prescription._id}`);
      pdfDoc.text(`Doctor: ${prescription.DoctorUsername}`);
      pdfDoc.text(`Patient: ${prescription.PatientUsername}`);
      pdfDoc.text(`Description: ${prescription.Description}`);
      pdfDoc.text(`Date: ${prescription.Date}`);
      pdfDoc.text(`Filled: ${prescription.Filled}`);
      pdfDoc.text(`Medicines: ${prescription.Medicines}`);

      pdfDoc.text('-----------------------------------------');

      pdfDoc.end();

      // Listen for the 'finish' event to ensure the file is fully written
      writeStream.on('finish', () => {
        // Download the PDF
        res.download(filePath, 'prescription.pdf', (err) => {
          if (err) {
            return res.status(500).json({ error: `Error downloading PDF: ${err.message}` });
          }

          // Clean up the temporary PDF file after download
          fs.unlinkSync(filePath);
        });
      });

    } catch (error) {
      return res.status(500).json({ error: `Error generating PDF: ${error.message}` });
    }
  }
};


// Req 65 Accept a follow-up request

const acceptFollowUpRequest = async (req, res) => {
  const { DoctorUsername, AppointmentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(AppointmentId)) {
    console.error('Invalid ObjectId format for AppointmentId');
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const appointment = await appointmentSchema.findById(AppointmentId);

      if (!appointment) {
        return res.status(404).json({ success: false, message: 'Appointment not found.' });
      }

      const doctor = await doctorSchema.findOne({ Username: appointment.DoctorUsername });

      if (!doctor) {
        return res.status(404).json({ success: false, message: 'Doctor not found.' });
      }

      const doctorAvailableTimeSlots = doctor.AvailableTimeSlots;

      const date = appointment.Date;
      const time = appointment.Time;
      
      const slot = doctorAvailableTimeSlots.find(s => s.Date.getTime() === date.getTime() && s.Time === time);
      
      console.log(slot);
      
      if (!slot) {
        return res.status(400).json({ success: false, message: 'Selected time slot is not available.' });
      }
      
      const validStatusValues = ['Requested', 'requested'];
      if (validStatusValues.includes(appointment.Status)) {
        console.log(appointment.Status);
        appointment.Status = 'Follow-up';
        slot.Status = 'booked';
        await appointment.save();
        await doctor.save();
        return res.status(200).json({ success: true, message: 'Follow-up appointment request has been accepted.' });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid request. The appointment is not in the appropriate status.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};


// Req 65 reject a follow-up request
const rejectFollowUpRequest = async (req, res) => {
  const { DoctorUsername, AppointmentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(AppointmentId)) {
    console.error('Invalid ObjectId format for AppointmentId');
    return;
  }

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const appointment = await appointmentSchema.findById(AppointmentId);

      if (!appointment) {
        return res.status(404).json({ success: false, message: 'Appointment not found.' });
      }

      const validStatusValues = ['Follow-up', 'follow-up', 'Requested', 'requested'];
      if (validStatusValues.includes(appointment.Status)) {
        // Delete the appointment from the database
        await appointmentSchema.deleteOne({ _id: AppointmentId });
        
        return res.status(200).json({ success: true, message: 'Follow-up appointment request has been rejected and deleted.' });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid request. The appointment is not in an appropriate status.' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};

const viewRequestedAppointments = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const appointments = await Appointment.find({
      DoctorUsername: DoctorUsername,
      Status: 'Requested'
    }).lean(); // Use the lean() method here

    if (!appointments || appointments.length === 0) {
      return res.status(404).send('No follow-up appointments requested for this doctor');
    }

    res.status(200).send(appointments);

  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}


// view all prescriptions of a patient
const viewAllPres = async (req, res) => {
  const { DoctorUsername, PatientUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const prescriptions = await Prescription.find({
      DoctorUsername: DoctorUsername,
      PatientUsername: PatientUsername,
    });

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).send("No prescriptions found for this patient");
    }

    res.status(200).send(prescriptions);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// view ALL prescriptions
const viewAllPresGeneral = async (req, res) => {
  const { DoctorUsername } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const prescriptions = await Prescription.find({
      DoctorUsername: DoctorUsername,
    });

    if (!prescriptions || prescriptions.length === 0) {
      return res.status(404).send("No prescriptions found for this doctor");
    }

    res.status(200).send(prescriptions);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


const viewPresDetails = async (req, res) => {
  const { DoctorUsername, prescriptionId } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const prescription = await Prescription.findOne({
      _id: mongoose.Types.ObjectId(prescriptionId),
      DoctorUsername: DoctorUsername
    });

    if (!prescription) {
      return res.status(404).send("Prescription not found for this doctor");
    }

    res.status(200).send(prescription);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// view meds @ pharacy
const getAllMedicinesFromPharmacy = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const { DoctorUsername } = req.params;

  if (!(req.user.Username === DoctorUsername)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const pharmacyResponse = await axios.get(`http://localhost:8000/DoctorFromTheClinic/GetAllMedicines/${DoctorUsername}`);
      const pharmacyMedicines = pharmacyResponse.data;

      if (!pharmacyMedicines || pharmacyMedicines.length === 0) {
        return res.status(404).json({ error: 'No medicines found in the pharmacy!' });
      }

      res.status(200).json(pharmacyMedicines);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
};

// add a patient's prescription 
const addPatientPrescription = async (req, res) => {
  const { username, PatientUsername } = req.params; // doctor username
  console.log(req.user.Username)
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const { description } = req.body;

      if (!username || !PatientUsername || !description) {
        return res.status(400).json({ error: 'All fields must be filled.' });
      }

      const doctor = await doctorSchema.findOne({ Username: username });
      if (!doctor) {
        return res.status(404).json({ error: 'Doctor not found.' });
      }

      const patient = await patientSchema.findOne({ Username: PatientUsername });
      if (!patient) {
        return res.status(404).json({ error: 'Patient not found.' });
      }

      const prescription = await Prescription.create({
        DoctorUsername: username,
        PatientUsername: PatientUsername,
        Description: description,
        Date: Date.now(),
        Filled: false,
      });

      patient.PatientPrescriptions.push(prescription._id);
      await patient.save();

      return res.status(200).json({ success: 'Prescription added successfully.', prescription });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  }
}

// update a patient's prescription
const updatePatientPrescription = async (req, res) => {
  const { DoctorUsername, PatientUsername, prescriptionId } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const { updatedDescription } = req.body;

    const doctor = await doctorSchema.findOne({ Username: DoctorUsername });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }

    const patient = await patientSchema.findOne({ Username: PatientUsername });
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found.' });
    }

    const prescription = await Prescription.findOne({
      _id: prescriptionId,
      DoctorUsername: DoctorUsername,
      PatientUsername: PatientUsername,
      Filled: false, // Only update if the prescription is unfilled
    });

    if (!prescription) {
      return res.status(404).json({
        error: 'Prescription not found or does not belong to the specified doctor and patient, or it is already filled.',
      });
    }

    if (updatedDescription) {
      prescription.Description = updatedDescription;
    }

    const updatedPrescription = await prescription.save();

    return res.status(200).json({
      success: 'Prescription updated successfully.',
      updatedPrescription,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};


// Method to add medicine to a prescription
const addMedicineToPrescription = async (req, res) => {
  const { DoctorUsername, PatientUsername, prescriptionId } = req.params;
  const username = DoctorUsername;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user && req.user.Username === DoctorUsername)) {
    return res.status(403).json({ error: 'You are not logged in as the doctor' });
  }

  try {
    const prescription = await Prescription.findOne({
      _id: prescriptionId,
      DoctorUsername: DoctorUsername,
      PatientUsername: PatientUsername,
    });

    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }

    const { Name, dosage } = req.body;

    const pharmacyResponse = await axios.get(`http://localhost:8000/DoctorFromTheClinic/GetMedicineByDoctor/${username}/${Name}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Pharmacy Response Data:', pharmacyResponse.data);

    const medicineDetails = pharmacyResponse.data;

    if (!medicineDetails || !medicineDetails.Name || isNaN(medicineDetails.Price) || isNaN(dosage)) {
      return res.status(404).json({ error: 'Invalid medicine details or dosage' });
    }

    prescription.TotalAmount += medicineDetails.Price * dosage;

    prescription.Medicines.push({
      Name: medicineDetails.Name,
      dosage: dosage,
    });

    await prescription.save();

    return res.status(200).json({ message: 'Medicine added to prescription successfully', prescription });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};


// delete medicine from prescription
const deleteMedecineFromPrescription = async (req, res) => {
  const { DoctorUsername, PatientUsername, prescriptionId, medicineName } = req.params;

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (!(req.user.Username === DoctorUsername)) {
    return res.status(403).json("You are not logged in!");
  }

  try {
    const prescription = await Prescription.findOne({
      _id: prescriptionId,
      DoctorUsername: DoctorUsername,
      PatientUsername: PatientUsername,
    });

    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found.' });
    }

    const medicineIndex = prescription.Medicines.findIndex(
      (medicine) => medicine.Name === medicineName
    );

    if (medicineIndex === -1) {
      return res.status(404).json({ error: 'Medicine not found in the prescription.' });
    }
    
    // Assuming you have a field named 'Price' in your Medicine schema
    const medicineDetails = await Medicine.findOne({ Name: medicineName });
    const removedMedicinePrice = medicineDetails ? medicineDetails.Price : 0;
    const removedMedicineDosage = prescription.Medicines[medicineIndex].dosage;

    prescription.TotalAmount -= removedMedicinePrice * removedMedicineDosage;

    prescription.Medicines.splice(medicineIndex, 1);

    await prescription.save();

    res.status(200).json({ message: 'Medicine deleted from prescription successfully.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const rescheduleAppointmentPatient = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);

  const { username, appointmentId, timeSlot } = req.params;

  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  } else {
    try {
      const doctor = await doctorSchema.findOne({ Username: username });

      if (!doctor) {
        return res.status(404).json({ success: false, message: 'doctor not found.' });
      }

      const selectedAppointment = await appointmentSchema.findOne({ _id: appointmentId, DoctorUsername: username ,Status: { $in: ["Upcoming", "upcoming", "Follow-up", "follow-up"] } });

      if (!selectedAppointment) {
        return res.status(404).json({ success: false, message: 'Appointment not found.' });
      }

      // if (selectedAppointment.PatientUsername !== patient.Username) {
      //   return res.status(403).json({ success: false, message: 'Patient is not associated with this appointment.' });
      // }

      //console.log(selectedAppointment);
      //const doctorUsername = selectedAppointment.DoctorUsername;
      //console.log(doctorUsername);      
      const patient = await patientSchema.findOne({ Username: selectedAppointment.PatientUsername });
      //console.log(doctor)
      if (!patient) {
        return res.status(404).json({ success: false, message: 'patient not found.' });
      }

      const doctorAvailableTimeSlots = doctor.AvailableTimeSlots;
      //console.log(doctor.AvailableTimeSlots);
      const selectedAppointmentDate = selectedAppointment.Date;
      const selectedAppointmentTime = selectedAppointment.Time;

      // const matchingTimeSlot = doctorAvailableTimeSlots.find(slot =>
      //   slot.Date.getTime() === selectedAppointmentDate.getTime() &&
      //   slot.Time === selectedAppointmentTime &&
      //   slot.Status === 'booked'
      // );

      let matchingTimeSlot;

      for(const s of doctorAvailableTimeSlots){
        if(s.Date.getTime() === selectedAppointmentDate.getTime() && s.Time === selectedAppointmentTime && s.Status === 'booked'){
            matchingTimeSlot = s;
            break;
        }
      }

      if (matchingTimeSlot) {
        matchingTimeSlot.Status = 'available';
      }

      let slot;
      //const timeSlot1 = new ObjectId(timeSlot);

      for(const s of doctorAvailableTimeSlots){
        //console.log(s._id);
        //console.log(timeSlot);

        if(s._id.equals(timeSlot)){
          slot = s;
          break;
        }
      }

      //const slot = doctorAvailableTimeSlots.findOne(s => s._id === timeSlot);
      //console.log(slot)
      let newAppointment;

      if (slot.Status === "available") {
        newAppointment = await appointmentSchema.create({
          Date: slot.Date,
          Time: slot.Time,
          DoctorUsername: selectedAppointment.DoctorUsername,
          PatientUsername: selectedAppointment.PatientUsername,
          Status: selectedAppointment.Status,
          PaymentMethod: selectedAppointment.PaymentMethod,
          Price: selectedAppointment.Price,
          Name: selectedAppointment.Name,
          ForPatient: selectedAppointment.ForPatient
        });

        slot.Status = "booked";
        await doctor.save();
      } else {
        return res.status(400).json({ success: false, message: 'This slot is already booked' });
      }

      selectedAppointment.Status = 'Rescheduled';
      await selectedAppointment.save();
      await SendEmailNotificationReschedule(newAppointment, doctor, patient);

      return res.status(200).json({ success: true, message: 'Appointment is rescheduled', newAppointment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
};


const cancelAppointmentPatient = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  const { username, appointmentId } = req.params;

  if (req.user.Username !== username) {
    return res.status(403).json({ success: false, message: 'You are not logged in!' });
  }

  try {

    const doctor = await doctorSchema.findOne({ Username: username });

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'doctor not found.' });
    }


    const selectedAppointment = await appointmentSchema.findOne({ _id: appointmentId, DoctorUsername: username ,Status: { $in: ["Upcoming", "upcoming", "Follow-up", "follow-up"] } });

    if (!selectedAppointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    // if (selectedAppointment.PatientUsername !== patient.Username) {
    //   return res.status(403).json({ success: false, message: 'Patient is not associated with this appointment.' });
    // }

    const patient = await patientSchema.findOne({ Username: selectedAppointment.PatientUsername});

    if (!patient) {
      return res.status(404).json({ success: false, message: 'Doctor not found.' });
    }

    const appointmentDateTime = new Date(selectedAppointment.Date);
    appointmentDateTime.setHours(selectedAppointment.Time, 0, 0, 0);

    const currentTime = new Date();

    // Calculate the time difference in milliseconds between the current time and appointment time
    const timeDifference = appointmentDateTime.getTime() - currentTime.getTime();

    // Convert milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    //console.log(hoursDifference);

    if (hoursDifference >= 24) {
      // Calculate the refund amount based on your business logic
      const refundAmount = selectedAppointment.Price;
      console.log(hoursDifference);
      // Update the WalletAmount directly in the database using $inc
      await patientSchema.updateOne({ Username: username }, { $inc: { WalletAmount: refundAmount } });
      await doctorSchema.updateOne({ Username: selectedAppointment.DoctorUsername }, { $inc: { WalletAmount: -refundAmount } });
      await SendEmailNotificationCancel(selectedAppointment, doctor, patient, "yes");
    }
    else {
      console.log("no refund");
      await SendEmailNotificationCancel(selectedAppointment, doctor, patient, "no");
    }

    const matchingTimeSlot = doctor.AvailableTimeSlots.find(slot =>
      slot.Date.getTime() === selectedAppointment.Date.getTime() &&
      slot.Time === selectedAppointment.Time &&
      slot.Status === 'booked'
    );

    if (matchingTimeSlot) {
      matchingTimeSlot.Status = 'available';
    }

    // Update existing appointment status to 'canceled'
    selectedAppointment.Status = 'Cancelled';

    // Save changes to appointment and doctor
    await selectedAppointment.save();
    await doctor.save();

    return res.status(200).json({ success: true, message: 'Appointment is canceled' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


const cancelAppointmentPatientFamMem = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  const { username, appointmentId } = req.params;

  if (req.user.Username !== username) {
    return res.status(403).json({ success: false, message: 'You are not logged in!' });
  }

  try {

    const doctor = await doctorSchema.findOne({ Username: username });

    if (!doctor) {
      return res.status(404).json({ success: false, message: 'doctor not found.' });
    }


    const selectedAppointment = await appointmentSchema.findOne({ _id: appointmentId, DoctorUsername: username ,Status: { $in: ["Upcoming", "upcoming", "Follow-up", "follow-up"] } });

    if (!selectedAppointment) {
      return res.status(404).json({ success: false, message: 'Appointment not found.' });
    }

    // if (selectedAppointment.PatientUsername !== patient.Username) {
    //   return res.status(403).json({ success: false, message: 'Patient is not associated with this appointment.' });
    // }

    const patient = await patientSchema.findOne({ Username: selectedAppointment.PatientUsername});

    if (!patient) {
      return res.status(404).json({ success: false, message: 'Doctor not found.' });
    }

    const appointmentDateTime = new Date(selectedAppointment.Date);
    appointmentDateTime.setHours(selectedAppointment.Time, 0, 0, 0);

    const currentTime = new Date();

    // Calculate the time difference in milliseconds between the current time and appointment time
    const timeDifference = appointmentDateTime.getTime() - currentTime.getTime();

    // Convert milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    //console.log(hoursDifference);

    if (hoursDifference >= 24) {
      // Calculate the refund amount based on your business logic
      const refundAmount = selectedAppointment.Price;
      console.log(hoursDifference);
      // Update the WalletAmount directly in the database using $inc
      await patientSchema.updateOne({ Username: username }, { $inc: { WalletAmount: refundAmount } });
      await doctorSchema.updateOne({ Username: selectedAppointment.DoctorUsername }, { $inc: { WalletAmount: -refundAmount } });
      await SendEmailNotificationCancelFam(selectedAppointment, doctor, patient, "yes");
    }
    else {
      console.log("no refund");
      await SendEmailNotificationCancelFam(selectedAppointment, doctor, patient, "no");
    }

    const matchingTimeSlot = doctor.AvailableTimeSlots.find(slot =>
      slot.Date.getTime() === selectedAppointment.Date.getTime() &&
      slot.Time === selectedAppointment.Time &&
      slot.Status === 'booked'
    );

    if (matchingTimeSlot) {
      matchingTimeSlot.Status = 'available';
    }

    // Update existing appointment status to 'canceled'
    selectedAppointment.Status = 'Cancelled';

    // Save changes to appointment and doctor
    await selectedAppointment.save();
    await doctor.save();

    return res.status(200).json({ success: true, message: 'Appointment is canceled' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};





const createDoctorAppointmentNotifications = async () => {
  try {
    const upcomingAppointments = await Appointment.find({ Status: { $in: ["Upcoming", "Follow-up", "follow-up", "upcoming"] } });
    const cancelledAppointments = await Appointment.find({ Status: { $in: ["Cancelled"] } });
    const rescheduledAppointments = await Appointment.find({ Status: { $in: ["Rescheduled"] } });

    // Handle upcoming appointments
    for (const appointment of upcomingAppointments) {
      const existingDoctorNotificationUP = await Notification.findOne({ type: "Appointment", DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date}` });

      if (!existingDoctorNotificationUP) {
        const newNotification = await Notification.create({
          type: "Appointment",
          username: `${appointment.DoctorUsername}`,
          DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date}`,
        });
        console.log(newNotification);
        await newNotification.save();
        console.log('Appointment notification added');
      } else {
        console.log('Appointment notification already exists');
      }
    }

    // Handle cancelled appointments
    for (const appointment of cancelledAppointments) {
      const existingDoctorNotificationCa = await Notification.findOne({ type: "Appointment", DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date} has been cancelled.` });
      if (!existingDoctorNotificationCa) {
        const newNotification = await Notification.create({
          type: "Appointment",
          username: `${appointment.DoctorUsername}`,
          DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date} has been cancelled.`,
        });
        await newNotification.save();
        console.log('Cancelled appointment notification added');
      } else {
        console.log('Cancelled appointment notification already exists');
      }
    }

    // Handle rescheduled appointments
    for (const appointment of rescheduledAppointments) {
      const existingDoctorNotificationRe = await Notification.findOne({ type: "Appointment", DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date} has been rescheduled.` });

      if (!existingDoctorNotificationRe) {
        const newNotification = await Notification.create({
          type: "Appointment",
          username: `${appointment.DoctorUsername}`,
          DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date} has been rescheduled.`,
        });

        await newNotification.save();
        console.log('Rescheduled appointment notification added');
      } else {
        console.log('Rescheduled appointment notification already exists');
      }
    }
    await removeDoctorAppointmentNotifications();
  } catch (error) {
    console.error(error);
  }
};

const removeDoctorAppointmentNotifications = async () => {
  try {
    const pastAppointments = await Appointment.find({ Date: { $lt: new Date() } });
    for (const appointment of pastAppointments) {
      const existingDoctorNotification = await Notification.findOne({ type: "Appointment", DoctorMessage: `Appointment with patient ${appointment.PatientUsername} on ${appointment.Date}` });
      if (existingDoctorNotification) {
        await existingDoctorNotification.remove();
        console.log('Appointment notification removed');

      } else {
        console.log('Appointment notification does not exist');
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const displayDoctorNotifications = async (req, res) => {
  try {
    //await createDoctorAppointmentNotifications(req);
    const { Username } = req.params;
    console.log(Username);
    const notifications = await Notification.find({ username: Username });
    const doctorMessages = notifications.map(notification => notification.DoctorMessage);
    res.status(200).json({ success: true, doctorMessages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch notifications' });
  }
};

const nodemailer = require('nodemailer');

const sendAppointmentDoctorRescheduleNotificationEmail = async (req) => {
  try {
    const { AppointmentId } = req.params;
    console.log('AppointmentId:', AppointmentId);

    if (!mongoose.Types.ObjectId.isValid(AppointmentId)) {
      console.error('Invalid ObjectId format for AppointmentId');
      return;
    }

    const appointment = await Appointment.findById(AppointmentId);

    if (!appointment) {
      console.error('Appointment not found for the given appointmentId');
      return;
    }

    const { PatientUsername, DoctorUsername, Date } = appointment;
    const Doctor = require('../Models/Doctor');
    const doctor = await Doctor.findOne({ Username: DoctorUsername });

    if (!doctor) {
      console.error(`Doctor not found for the given username: ${DoctorUsername}`);
      return;
    }

    const doctorEmail = doctor.Email; // Adjust the attribute accordingly

    console.log(doctor);
    console.log(doctorEmail);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'SuicideSquadGUC@gmail.com',
        pass: 'wryq ofjx rybi hpom',
      },
    });

    const subject = 'Appointment Rescheduled';
    const text = `Dear ${DoctorUsername},

    We would like to inform you that the following appointment has been rescheduled:

    - Patient: ${PatientUsername}
    - Date: ${Date}

    Please make a note of the new appointment details. If you have any questions, feel free to contact us.

    Best regards,
    Your Clinic`;

    const mailOptions = {
      from: 'SuicideSquadGUC@gmail.com',
      to: doctorEmail,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment notification email sent successfully');
  } catch (error) {
    console.error('Failed to send appointment notification email:', error);
  }
};



const sendAppointmentDoctorCancelledNotificationEmail = async (req) => {
  try {
    const { AppointmentId } = req.params;
    console.log('AppointmentId:', AppointmentId);

    if (!mongoose.Types.ObjectId.isValid(AppointmentId)) {
      console.error('Invalid ObjectId format for AppointmentId');
      return;
    }

    const appointment = await Appointment.findById(AppointmentId);

    if (!appointment) {
      console.error('Appointment not found for the given appointmentId');
      return;
    }

    const { PatientUsername, DoctorUsername, Date, RescheduleReason } = appointment;
    const Doctor = require('../Models/Doctor'); // Adjust the model path accordingly
    const doctor = await Doctor.findOne({ Username: DoctorUsername });

    if (!doctor) {
      console.error(`Doctor not found for the given username: ${DoctorUsername}`);
      return;
    }

    const doctorEmail = doctor.Email; // Adjust the attribute accordingly

    console.log(doctor);
    console.log(doctorEmail);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'SuicideSquadGUC@gmail.com',
        pass: 'wryq ofjx rybi hpom',
      },
    });

    const subject = 'Appointment Cancelled';
    const text = `Dear ${DoctorUsername},

    We're sorry to inform you that the following appointment has been cancelled:

    - Patient: ${PatientUsername}
    - Date: ${Date}

    If you have any questions, feel free to contact us.

    Best regards,
    Your Clinic`;

    const mailOptions = {
      from: 'SuicideSquadGUC@gmail.com',
      to: doctorEmail,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment notification email sent successfully');
  } catch (error) {
    console.error('Failed to send appointment notification email:', error);
  }
};

const sendAppointmentDoctorNotificationEmail = async (req) => {
  try {
    const { AppointmentId } = req.params;
    console.log('AppointmentId:', AppointmentId);

    if (!mongoose.Types.ObjectId.isValid(AppointmentId)) {
      console.error('Invalid ObjectId format for AppointmentId');
      return;
    }

    const appointment = await Appointment.findById(AppointmentId);

    if (!appointment) {
      console.error('Appointment not found for the given appointmentId');
      return;
    }

    const { PatientUsername, DoctorUsername, Date } = appointment;
    const Doctor = require('../Models/Doctor'); // Adjust the model path accordingly
    const doctor = await Doctor.findOne({ Username: DoctorUsername });

    if (!doctor) {
      console.error(`Doctor not found for the given username: ${DoctorUsername}`);
      return;
    }

    const doctorEmail = doctor.Email; // Adjust the attribute accordingly

    console.log(doctor);
    console.log(doctorEmail);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'SuicideSquadGUC@gmail.com',
        pass: 'wryq ofjx rybi hpom',
      },
    });

    const subject = 'Appointment Cancelled';
    const text = `Dear ${DoctorUsername},

      Your appointment with ${PatientUsername} on ${Date} has been confirmed:

    If you have any questions, feel free to contact us.

    Best regards,
    Your Clinic`;

    const mailOptions = {
      from: 'SuicideSquadGUC@gmail.com',
      to: doctorEmail,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Appointment notification email sent successfully');
  } catch (error) {
    console.error('Failed to send appointment notification email:', error);
  }
};



module.exports = {
  docFilterAppsByDate,
  docFilterAppsByStatus,
  viewInfoAndRecords,
  MyPatients,
  PatientByName,
  PatientsUpcoming,
  updateDoctorByAffiliation,
  updateDoctorByEmail,
  updateDoctorByHourlyRate,
  selectPatientWithHisName,
  addDoctor,
  viewContract,
  allAppointmentsDoc,
  acceptContract,
  viewWalletAmountByDoc,
  viewHealthRecords,
  addHealthRecordForPatient,
  addAvailableTimeSlots,
  allAvailableTimeSlots,
  scheduleFollowUp,
  doctorPastApp,
  createAvailableApps,
  updateMedicineDosage,
  downloadPrescriptionPDF,
  acceptFollowUpRequest,
  rejectFollowUpRequest,
  viewRequestedAppointments,
  addPatientPrescription,
  viewAllPres,
  viewAllPresGeneral,
  viewPresDetails,
  getAllMedicinesFromPharmacy,
  updatePatientPrescription,
  addMedicineToPrescription,
  deleteMedecineFromPrescription,
  rescheduleAppointmentPatient,
  cancelAppointmentPatient,
  cancelAppointmentPatientFamMem,
  displayDoctorNotifications,
  sendAppointmentDoctorRescheduleNotificationEmail,
  sendAppointmentDoctorCancelledNotificationEmail,
  sendAppointmentDoctorNotificationEmail,
  rejectContract,
};