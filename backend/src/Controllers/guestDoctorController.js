const GuestDoctor = require('../Models/GuestDoctor.js');
const { isEmailUnique, isUsernameUnique, validatePassword } = require('../utils.js');

// Task 3 : register Doctor
const registerGuestDoctor = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', true);

    const {
        Username,
        Name,
        Email,
        Password,
        DateOfBirth,
        HourlyRate,
        Affiliation,
        EDB,
        Speciality,
    } = req.body;

    try {
        console.log(req.body);
        console.log(req.files);

        if (!req.files || !req.files.IDDocument || !req.files.MedicalDegreeDocument || !req.files.WorkingLicenseDocument) {
            return res.status(400).json('Missing file(s)');
        }

        const {
            IDDocument,
            MedicalDegreeDocument,
            WorkingLicenseDocument,
        } = req.files;


        if (!(await isUsernameUnique(Username))) {
            return res.status(400).json('Username is already taken.');
        }

        if (!(await isEmailUnique(Email))) {
            return res.status(400).json('Email is already in use.');
        }

        if (!(await validatePassword(Password))) {
            return res.status(400).json("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long");
        }

        if (!Username ||
            !Name ||
            !Email ||
            !Password ||
            !DateOfBirth ||
            !HourlyRate ||
            !Affiliation ||
            !EDB ||
            !Speciality) {
            return res.status(400).json('All fields must be filled.');
        }

        const guestDoctor = new GuestDoctor({
            Username,
            Name,
            Email,
            Password,
            DateOfBirth,
            HourlyRate,
            Affiliation,
            EDB,
            Speciality,
            // IDDocument,
            // MedicalDegreeDocument,
            // WorkingLicenseDocument
            IDDocument: {
                data: IDDocument[0].buffer,
                contentType: IDDocument[0].mimetype,
            },
            MedicalDegreeDocument: {
                data: MedicalDegreeDocument[0].buffer,
                contentType: MedicalDegreeDocument[0].mimetype,
            },
            WorkingLicenseDocument: {
                data: WorkingLicenseDocument[0].buffer,
                contentType: WorkingLicenseDocument[0].mimetype,
            },
        });

        await guestDoctor.save();
        res.status(200).json({ guestDoctor });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = registerGuestDoctor;