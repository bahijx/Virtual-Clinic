
# El7a2ny: Virtual Clinic and Pharmacy

The primary objective of the project is to establish a comprehensive online clinic that caters to the needs of both patients and the clinic itself, complete with a pharmacy. El7a2ny is a software program designed to let patients, medical professionals, chemists, and clinics all work together more efficiently and automatically. This encompasses features such as finding a suitable a doctor, making appointments, holding in-person or virtual meetings, obtaining prescriptions, receiving follow-up reminders, accessing medical records, and placing prescription drug orders.


## Motivation
Our motivation to develop El7a2ny is rooted in a shared commitment to elevate and refine healthcare processes. We envision a future where healthcare transcends traditional boundaries, and our project is the catalyst for this transformation.

**Revolutionizing Healthcare Accessibility:** Our passion lies in breaking down barriers to healthcare. Picture a world where finding the right doctor, setting up appointments, and managing prescriptions are just a few clicks away. We're committed to making healthcare not just a service but an experience that's effortlessly within reach.

**Empowering Personalized Care:** At the heart of our project is the belief that healthcare should be as unique as the individuals it serves. With our platform, you're not just a patient; you're an active participant in your health journey. Access your medical history, set personalized reminders, and take control of your well-being on your terms.

**Simplifying Professional Workflows:** For healthcare professionals, we're on a mission to simplify the complexities of daily tasks. By automating administrative processes, we aim to give doctors, pharmacists, and clinics more time to focus on what they do best – providing attentive and quality care to their patients.

**Catalyzing Seamless Communication:** In our vision, communication isn't just a transaction; it's the heartbeat of healthcare. We're building a platform that facilitates transparent and instantaneous communication between patients and healthcare providers, fostering a sense of connection that goes beyond traditional medical interactions.
## Build Status
Some pages in the website face a longer time loading than others , which can be confusing sometimes for no data , but we tried fixing it by adding a "Loading" statements all over the website so the user does not get confused that the page stopped loading , also The "change password" has to work on 
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
})); (something specific) but we can’t do that as sometimes we run the frontend on a different port so we need to use
app.use(cors({
  origin: ‘*’,
  credentials: true,
}));

## Code Style
### **Project Hierarchy**

#### **1. Backend**

**Controllers:** Contains controllers handling various the business logic -- optimizing online healthcare interactions, streamlining appointments, prescriptions, and medical records for enhanced accessibility and personalized care.

**Models:** Houses database models and schemas that define the structure and relationships of its data entities.

**Middleware:** Holds middleware functions used in the application, i.e., jsonwebtoken is used for logging in and multer for document uploads.

**Routes:** Establishes pathways for handling various HTTP requests, specifying endpoints and connecting them to their respective controllers 

**App:** Entry point for the backend application.

**Utils:** Verifies the uniqueness of emails and usernames, and validates passwords.

___

#### **2. Frontend**

**Assets:** Stores static assets and visual elements such as images, fonts, etc.

**Components:** Houses reusable React components such as lists, tables, forms and navigation bars.

**Features:** Contains feature-specific components and logic.

**Pages:** Defines different pages of the application such as different medical professionals' views registration pages.

**App:** Entry point for the frontend application.
___

### Backend Code Style
The backend code follows a clean and organized structure with clear separation of concerns. Notable points include:

**Async/Await Usage:** The code consistently uses async/await for handling asynchronous operations, enhancing code readability.

**Error Handling:** Robust error handling is implemented using try-catch blocks, providing clear responses to potential issues.

**Consistent Naming:** Variable and function names are in camelCase, adhering to common JavaScript conventions.

**Comments:** The code includes comments for explaining complex logic and providing context, aiding in understanding.
___

### Frontend Code Style
The frontend code, written in React, also follows a structured and readable style:

**Component Structure:** Components are well-organized into directories based on their functionality, promoting maintainability.

**State Management:** React state is managed using the useState hook, contributing to a more functional and modular approach.

**Effect Handling:** Managing side effects in React using the useEffect hook, fostering a more functional and modular approach to handling asynchronous operations and lifecycle events.

**External Dependencies:** External dependencies, such as Axios for HTTP requests, are imported and used consistently.

**Consistent Styling:** Consistent styling practices are followed, and class names are indicative of their purpose.
## Screenshots
![Screenshot (3079)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/619fbe95-1796-4e72-888a-932dc9ef8ca6)
![Screenshot (3080)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/fccddc7c-4398-4e2b-a40c-8aff1a285e19)
![Screenshot (3081)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/5be961ef-a8c9-48da-94ec-263c9c55d5dd)
![Screenshot (3082)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/c59c5156-47a8-457f-953d-5be1943564ee)
![Screenshot (3083)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/5b67bf65-db41-46e2-84ea-f56aab824825)
![Screenshot (3084)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/3d02109d-3a08-45b9-a49b-e4e765cc7f8c)
![Screenshot (3085)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/da925836-9a40-43fc-a81c-c33e9407fc07)
![Screenshot (3086)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/585ee083-2338-478f-aaf4-4646b62dfa35)
![Screenshot (3087)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/bfb8a3fc-5942-4e37-8951-9aa88f83f3ca)
![Screenshot (3088)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/30278b8c-f415-47e9-9e70-c84cafade3a7)
![Screenshot (3089)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/24dadfeb-ef56-4002-9e86-d90c1f511efb)
![Screenshot (3090)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/39355475-b158-41b8-bbe7-7313c81092a6)
![Screenshot (3091)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/8ba24576-06d0-40f7-9d46-15d48a80c61f)
![Screenshot (3092)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/83e82354-8bcc-406e-802c-00cd778a1ce3)
![Screenshot (3093)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/166ebed4-15ef-4689-86fb-47213013d982)
![Screenshot (3094)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/27af94b9-a046-4c71-97eb-ce165dce303f)
![Screenshot (3095)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/998a342a-df7b-43f7-9985-1f6290bf423f)
![Screenshot (3096)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/2b2dff06-629f-49bf-8340-6286dcbbd98e)
![Screenshot (3097)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/33985ff6-49f9-42fe-a1f2-aef8e2157830)
![Screenshot (3098)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/e7b611b0-835d-4663-bae7-6ccf1b4fe99e)
![Screenshot (3099)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/18eb81cf-2134-4780-98c6-c3c9cdec5dc8)
![Screenshot (3100)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/81444a26-da06-4b4c-8570-6b2d8d39e990)
![Screenshot (3101)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/90a114ec-8059-4dea-97c8-9d147f2a15e8)
![Screenshot (3102)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/755bc15d-de70-40b5-9f94-c9cafe30550f)
![Screenshot (3103)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/9bff16f9-c3c8-47ab-95f6-cc9529c335de)
![Screenshot (3104)](https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic/assets/121583270/6a0db388-8f78-446c-bffd-ed0ca5eab4cb)

## Tech Stack
El7a2ny utilizes the MERN stack, comprising MongoDB, Express.js, React, and Node.js, to create a robust and full-stack web application. This technology stack seamlessly integrates a NoSQL database, a server-side framework, a front-end framework, and a runtime environment, providing a comprehensive solution for building scalable and dynamic web applications.

**Client:** React and Axios

**Server:** Node, Express and MongoDB
## Features
In our application, we prioritize user experience by seamlessly integrating a variety of micro enhancements. From animated transitions and tooltip guidance for intuitive navigation to smart form validation and contextual feedback for user assistance, each detail is meticulously designed. These subtle yet impactful features, such as responsive design and persistent user preferences, collectively contribute to an enhanced, efficient, and personalized experience, ensuring our users engage with our application effortlessly and enjoy a heightened level of satisfaction.

**Soothing Color Palette:** Our project features a carefully curated color scheme primarily centered around calming shades of blue and cream. Leveraging the principles of color psychology, the choice of blue invokes a sense of tranquility and professionalism.

**Sectionalized Architecture:** Implemented with meticulous precision, the project embodies a robust architecture with well-defined sections, ensuring intuitive navigation and seamless user engagement.

**Optimized Visibility Mechanisms:** Prioritizing clarity, our project incorporates advanced visibility features, guaranteeing optimal information presentation for users.

**Visual Equilibrium:** A focus on visual balance is integral to our design philosophy, resulting in a harmonious layout that contributes to an aesthetically pleasing and user-centric interface.

**Fill Screen Mode:** Enhancing user flexibility, our application includes a fill screen mode, allowing users to maximize their viewing experience and immerse themselves in content.

**Cross-Platform Compatibility:** Our project is designed to be seamlessly accessible across various platforms, ensuring a consistent and user-friendly experience regardless of the device or OS being used.
## Code Examples
### Server
#### Patient Controller Function:
    // Task 2: delete medical history document

    const deleteMedicalHistoryDocument = async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Credentials', true);

        const { Username, filePathToRemove } = req.params;
        if (!(req.user.Username === Username)) {
            res.status(403).json("You are not logged in!");
        } else {

        try {
            const patient = await patientSchema.findOne({ Username });

            if (!patient) {
                return res.status(404).json({ error: 'Patient not found' });
            }

            // Find the index of the document with the given _id
            const documentIndex = patient.MedicalHistoryDocuments.findIndex((document) => document._id.toString() === filePathToRemove);

            if (documentIndex === -1) {
                return res.status(404).json({ error: 'Document not found' });
            }

            // Remove the document at the found index
            patient.MedicalHistoryDocuments.splice(documentIndex, 1);

            await patient.save();

            res.status(200).send({ message: 'Document deleted successfully' });
            } catch (error) {
            res.status(500).json({ error: error.message });
            }
        }
    };

#### Multer Middleware:
    const express = require('express');
    const multer = require('multer');
    const path = require('path');
    const storage = multer.memoryStorage();
    const allowedFileTypes = ['pdf', 'jpeg', 'jpg', 'png'];
    const fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname).toLowerCase();

    if (allowedFileTypes.includes(extname.substr(1))) {
        return cb(null, true);
    }
    return cb(new Error('Invalid file type. Only PDF, JPEG, JPG, and PNG files are allowed.'));
    };

    const upload = multer({
        storage: storage,
        fileFilter: fileFilter,
    });

    module.exports = upload;

#### Doctor Model:
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const doctorSchema = new Schema({
        Username: {
            type: String,
            required: true,
            unique: true
        },  
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true,
        },
        DateOfBirth: {
            type: Date,
            required: true
        },
        HourlyRate:{
            type: Number,
            required: true,
        },
        Affiliation:{
            type:String,
            required: true
        },
        EDB:{
            type:String,
            required: true
        },
        PatientsUsernames: [{
            type: String,
            ref: 'Patient',
        }],
        Speciality:{
            type: String,
            required: true,
            enum:["dermatology","dentistry","psychiatry","neurology","orthopedics","Dermatology","Dentistry","Psychiatry","Neurology","Orthopedics"]

        },
        WalletAmount:{
            type: Number,
            default: 0
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
        AvailableTimeSlots: [
          {
            Date: {
                type: Date,
            },
            Time: {
                type: Number, 
            },
            Status: {
                type: String,
                default: "available",
                enum: ["available", "booked"],
                required: false,
            },
          },
        ],
    },{ timestamps: true });

    const Doctor = mongoose.model('Doctor', doctorSchema);
    module.exports = Doctor;

#### Patient Feature Route:
    router.post("/addMedicalHistoryDocument/:username", verify, upload.single("MedicalHistoryDocuments"), addMedicalHistoryDocument);

#### Utility Function to Check the Uniqueness of a Username in the Database:
    async function isUsernameUnique(username) {
    const patientExists = await Patient.findOne({ Username: username });
    const guestDoctorExists = await GuestDoctor.findOne({ Username: username });
    const doctorExists = await Doctor.findOne({ Username: username });
    const adminExists = await Admin.findOne({ Username: username });
    return !patientExists && !guestDoctorExists && !adminExists && !doctorExists;
    }
___

### Client
#### Colors (Assets):
    :root {
    --mint-geen: #067787;
    --ligth-grey: #f5f5f5;
    --dark-grey: #404040;
    --red: #e50c0c;
    }

    .green-btn {
    background-color: var(--mint-geen);
    color: white;
    }

    .white-btn {
    background-color: var(--ligth-grey);
    color: red;
    }

    .grey-btn {
    background-color: var(--ligth-grey);
    color: var(--mint-geen);
    }

    .green-txt {
    color: var(--mint-geen);
    }

    .red-txt {
    color: var(--red);
    }

    .dark-grey-txt {
    color: var(--dark-grey);
    }

    .err-active {
    border-color: var(--red);
    }

    .bg-green {
    background-color: #e1eff1;
    }

    .bg-grey {
    background-color: var(--ligth-grey);
    }
    
#### Patients List Component:
    import { useNavigate, useParams } from "react-router-dom";
    import axios from "axios";
    import { useEffect, useState } from "react";
    import search from "../assets/images/svg/search.svg";
    import TablePatients from "./TablePatients.jsx";
    import NavBarDoctor from "./NavBarDoctor.jsx";

    function PatientsList() {
    const [searchText, setSearchText] = useState("");
    const [filterText, setFilterText] = useState("");
    const [result, setResult] = useState([]);
    const { username } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const response = axios
        .get(`http://localhost:4000/Doctor/MyPatients/${username}`, {
            headers: { authorization: "Bearer " + sessionStorage.getItem("token") },
        })
        .then((res) => {
            setResult(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        });
    }, [username]);
    console.log(result);
    result.map((e) => {
        console.log(e);
    });

    const onFilterValueChanged = (event) => {
        setFilterText(event.target.value);
    };
    console.log(filterText);

    let tHead = [
        "Name",
        "Username",
        "Email",
        "View",
        "Add Prescription",
        "View Prescriptions",
    ];
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
        <NavBarDoctor username={username} />
        <div className="d-flex justify-content-between flex-row">
            <p className="text-capitalize fs-4 w-25">Patients</p>
            <div className="d-flex flex-row w-75 justify-content-end">
            <div className="input-group w-50">
                <span className="input-group-text bg-white border-end-0 search">
                <img src={search} alt="search" />
                </span>
                <input
                type="text"
                className="form-control border-start-0 search ps-0"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <select className="input-group-text bg-white border-end-0 search" name="upcomingAppointments" onChange={onFilterValueChanged}>
                <option value="all">All</option>
                <option value="upcoming">Upcoming</option>
                <option value="finished">Finished</option>
                <option value="running">Running</option>
                <option value="following">Following</option>
            </select>
            </div>
        </div>
        <TablePatients
            username={username}
            tHead={tHead}
            data={result}
            searchText={searchText}
            filterText={filterText}
        />
        </div>
    );
    }
    export default PatientsList;

#### Login Page
    import { useNavigate } from 'react-router-dom';
    import Input from '../components/Input.jsx';
    import MainBtn from '../components/Button.jsx';
    import { Link } from 'react-router-dom';
    import { useState } from 'react';
    import axios from "axios";

    function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState(""); 
    
    const handleLogin = async (event) => {
        event.preventDefault(); 
        console.log('uuu', username);
        console.log('ppp', password);
        try {
        const response = await axios.post('http://localhost:4000/login', { username: username, password: password });
        if (response.data.userDoctor) {
            sessionStorage.setItem("token", response.data.userDoctor.accessToken);
            navigate(`/doctorView/${username}`);
        } else if (response.data.userPatient) {
            sessionStorage.setItem("token", response.data.userPatient.accessToken);
            navigate(`/patientView/${username}`);
        } else if (response.data.userAdmin) {
            sessionStorage.setItem("token", response.data.userAdmin.accessToken);
            navigate(`/administratorView/${username}`);
        } else {
            console.error('User role not recognized');
            alert("User role not recognized");
        }
        } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.error : error.message);
        }
    };

    return (
        <div>
        <form
        className="d-flex justify-content-center"
        >
        <div className="form-width">
            <p className="text-capitalize fs-4">Login</p>
    
            <Input
            title='username' 
            placeholder='enter your username'
            type='text'
            onChange={(e) => setUsername(e.target.value)}
        />
            <Input
                title='password'
                placeholder='enter your password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="mt-3">
                <MainBtn
                txt='login'
                style='green-btn'
                action={handleLogin}
                
                />
            </div>

            <p className="text-center mt-3 small-txt">
                <>
                Forgot Password?
                <Link to="/forgotpassword" className="green-txt">
                    {' '}
                    Reset Password
                </Link>
                </>
            </p>
        </div>
        </form>
        </div>
        
    );
    }
    export default Login;

#### Routes in App:
    import AppointmentsList from './components/AppointmentsList';
    <Route exact path="/appointmentsList/:username" element={<AppointmentsList />} />

## Installation

Install my-project with npm:

```bash
  npm install my-project
  cd my-project
```
Install the following npm packages:

    1. axios -- npm i axios
    2. bcrypt -- npm i bcrypt
    3. body-parser -- npm i body-parser
    4. connect -- npm i connect
    5. cookie-parser -- npm i cookie-parser
    6. cors -- npm i cors
    7. dotenv -- npm i dotenv
    8. express -- npm i express
    9. git -- npm i git
    10. jsonwebtoken -- npm i jsonwebtoken
    11. moment -- npm i moment
    12. mongoose -- npm i mongoose
    13. multer -- npm i multer
    14. node -- npm i node
    15. nodemailer -- npm i nodemailer
    16. nodemon -- npm i nodemon
    17. pdfkit -- npm i pdfkit
    18. react -- npm i react
    19. stripe -- npm i stripe
    20. validator -- npm i validator

Install the following apps:

    1. MongoDB (Atlas)
    2. Postman
    3. Visual Studio Code
## API Reference
### Admin Routes

#### Create Admin

    POST /admin/createAdmin/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username for creating the admin. |

#### Delete Entity

    DELETE /admin/deleteEntity/:username/:entityType/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |
| `entityType` | `string` | **Required**. The type of entity to delete. |
| `Username` | `string` | **Required**. The username of the entity to delete. |

#### Delete Entity 2

    DELETE /admin/deleteEntity2/:username/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |
| `Username` | `string` | **Required**. The username of the entity to delete. |

#### View Unapproved Doctors

    GET /admin/viewUnapprovedDoctors/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |

#### View Doctor Info

    GET /admin/viewDoctorInfo/:username/:Username  


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Accept or Reject Doctor Request

    POST /admin/acceptOrRejectDoctorRequest/:username/:Username


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Create Contract

    POST /admin/createContract/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The admin's username. |

___

### Appointment Routes

#### Register Prescription

    POST /Appointment/Register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Prescription details to register. |

___

### Doctor Routes

#### Register Doctor

    POST /Doctor/Register


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Documents to register for a doctor. |

#### Update Doctor by Affiliation

    PUT /Doctor/updateDoctorByAffiliation/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Update Doctor by Email

    PUT /Doctor/updateDoctorByEmail/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Update Doctor by Hourly Rate

    PUT /Doctor/updateDoctorByHourlyRate/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Filter Appointments by Date

    GET /Doctor/docFilterAppsByDate/:Username/:Date

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `Date` | `string` | **Required**. The date for filtering appointments. |

#### Filter Appointments by Status

    GET /Doctor/docFilterAppsByStatus/:Username/:Status

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `Status` | `string` | **Required**. The status for filtering appointments. |

#### View All Appointments

    GET /Doctor/allAppointments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### View Information and Health Records

    GET /Doctor/viewInfoAndRecords/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View My Patients

    GET /Doctor/MyPatients/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Search for a Patient by Name

    GET /Doctor/PatientByName/:Username/:Name

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `Name` | `string` | **Required**. The name of the patient to search for. |

#### Filter Patients Based on Upcoming Appointments

    GET /Doctor/PatientsUpcoming/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Select a Patient from the List of Patients

    GET /Doctor/selectPatientWithHisName/:DoctorId/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorId` | `string` | **Required**. The ID of the doctor. |
| `Username` | `string` | **Required**. The username of the patient. |

#### Add Doctor

    POST /Doctor/addDoc
    
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Details to add a doctor. |

#### View Contract

    GET /Doctor/viewContract/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### Accept Contract

    POST /Doctor/acceptContract/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### Reject Contract

    POST /Doctor/rejectContract/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### View Wallet Amount by Doctor

    GET /Doctor/viewWalletAmountByDoc/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### View Health Records

    GET /Doctor/viewHealthRecords/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Add Health Record for Patient

    POST /Doctor/addHealthRecord/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Add Available Time Slots

    POST /Doctor/addAvailableTimeSlots/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### Schedule Follow-Up Appointment

    POST /Doctor/scheduleFollowUp/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Doctor's Past Appointments

    GET /Doctor/doctorPastApp/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Create Available Apps

    POST /Doctor/createAvailableApps/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### Update Medicine Dosage

    POST /Doctor/updateMedicineDosage/:DoctorUsername/:prescriptionId/:medicineName
    
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `prescriptionId` | `string` | **Required**. The ID of the prescription. |
| `medicineName` | `string` | **Required**. The name of the medicine to update dosage. |

#### Accept Follow-Up Request

    POST /Doctor/acceptFollowUpRequest/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Reject Follow-Up Request

    POST /Doctor/rejectFollowUpRequest/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Download Prescription PDF

    GET /Doctor/downloadPrescriptionPDF/:DoctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |

#### Add Medicine to Prescription

    POST /Doctor/addMedicineToPrescription

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Medicine details to add to a prescription. |

#### Add Patient Prescription

    POST /Doctor/addPatientPrescription/:username/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View All Prescriptions

    GET /Doctor/viewAllPres/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### Update Prescription

    PUT /Doctor/updatePrescription/:DoctorUsername/:PatientUsername/:prescriptionId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |
| `prescriptionId` | `string` | **Required**. The ID of the prescription. |

#### Delete Medicine From Prescription

    POST /Doctor/DeleteMedecineFromPrescription

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Medicine details to delete from a prescription. |

#### Reschedule Appointment (Patient)

    POST /Doctor/rescheduleAppointment/:username/:appointmentId/:timeSlot

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |
| `timeSlot` | `string` | **Required**. The new time slot for rescheduling. |

#### Cancel Appointment (Patient)

    POST /Doctor/cancelAppointmentPatient/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Cancel Appointment (Patient Family Member)

    POST /Doctor/cancelAppointmentPatientFamMem/:username/:appointmentId/:familyId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |
| `familyId` | `string` | **Required**. The ID of the family member. |

#### Display Doctor Notifications

    GET /Doctor/displayDoctorNotifications/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |

#### Send Appointment Doctor Reschedule Notification Email

    POST /Doctor/sendAppointmentDoctorRescheduleNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

#### Send Appointment Doctor Cancelled Notification Email

    POST /Doctor/sendAppointmentDoctorCancelledNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

#### Send Appointment Doctor Notification Email

    POST /Doctor/sendAppointmentDoctorNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the doctor. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

___
### Family Member Routes

#### Register Family Member

    POST /FamilyMember/Register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Details to register a family member. |

___

### Guest Doctor Routes

#### Register Guest Doctor

    POST /GuestDoctor/Register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Documents to register a guest doctor. |
| `IDDocument` | `file` | **Required**. The ID document file (maxCount: 1). |
| `MedicalDegreeDocument` | `file` | **Required**. The medical degree document file (maxCount: 1). |
| `WorkingLicenseDocument` | `file` | **Required**. The working license document file (maxCount: 1). |

___

### Health Package Routes

#### Get All Health Packages

    GET /HealthPackage/packages/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to retrieve health packages for. |

#### Subscribe to Health Package

    POST /HealthPackage/subscribe/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to subscribe to a health package. |

#### Create Health Package

    POST /HealthPackage/create/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to create a health package for. |

#### Update Health Package by Annual Fee

    PUT /HealthPackage/updateAnnualFee/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to update the health package for. |
| `Type` | `string` | **Required**. The type of update (e.g., Annual Fee). |

#### Update Health Package by Doctor Session Discount

    PUT /HealthPackage/updateDoctorSessionDiscount/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to update the health package for. |
| `Type` | `string` | **Required**. The type of update (e.g., Doctor Session Discount). |

#### Update Health Package by Family Subscription Discount

    PUT /HealthPackage/updateFamilySubscriptionDiscount/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to update the health package for. |
| `Type` | `string` | **Required**. The type of update (e.g., Family Subscription Discount). |

#### Update Health Package by Medicine Discount

    PUT /HealthPackage/updateMedicineDiscount/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to update the health package for. |
| `Type` | `string` | **Required**. The type of update (e.g., Medicine Discount). |

#### Delete Health Package

    DELETE /HealthPackage/delete/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to delete the health package for. |
| `Type` | `string` | **Required**. The type of health package to delete. |

#### View Health Package Information

    GET /HealthPackage/view/:username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username to view health package information for. |
| `Type` | `string` | **Required**. The type of health package to view. |

___

### Patient Routes

#### Register Patient

    POST /Patient/registerPatient

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| (Body) | - | Details to register a patient. |

#### Add Family Member

    POST /Patient/addFamMember/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient adding a family member. |

#### Get Family Members

    GET /Patient/getFamMembers/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient to retrieve family members. |

#### Find Doctor by Speciality

    GET /Patient/findDocBySpeciality/:Username/:Speciality

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Speciality` | `string` | **Required**. The speciality of the doctor to find. |

#### Find Doctor by Availability

    GET /Patient/findDocByAvailability/:Username/:Date/:Time

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Date` | `string` | **Required**. The date to find available doctors. |
| `Time` | `string` | **Required**. The time to find available doctors. |

#### Search Doctor by Name

    GET /Patient/searchDocByName/:Username/:Name

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Name` | `string` | **Required**. The name of the doctor to search. |

#### Search Doctor by Speciality

    GET /Patient/searchDocBySpec/:Username/:Speciality

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Speciality` | `string` | **Required**. The speciality of the doctor to search. |

#### Add Prescription to Patient

    POST /Patient/addPresToPatient/:Username/:id

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `id` | `string` | **Required**. The ID of the prescription to add. |

#### View Patient's Prescriptions

    GET /Patient/viewMyPres/:id

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. The ID of the patient's prescriptions. |

#### Filter Patient's Prescriptions Based on Date

    GET /Patient/filterMyPresBasedOnDate/:Username/:Date

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Date` | `string` | **Required**. The date to filter prescriptions. |

#### Filter Patient's Prescriptions Based on Doctor

    GET /Patient/filterMyPresBasedOnDoctor/:Username/:DoctorUsername
    
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `DoctorUsername` | `string` | **Required**. The username of the doctor to filter prescriptions. |

#### Filter Patient's Prescriptions Based on Filled Status

    GET /Patient/filterMyPresBasedOnFilled/:Username/:Filled

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Filled` | `string` | **Required**. The filled status to filter prescriptions. |

#### View All Doctors with Session Prices

    GET /Patient/viewAllDoctors/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Doctor Information

    GET /Patient/viewDoctorInfo/:DoctorUsername/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `DoctorUsername` | `string` | **Required**. The username of the doctor. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View All Patient's Prescriptions

    GET /Patient/viewAllMyPres/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |

#### Patient Filter Appointments by Date

    GET /Patient/patientFilterAppsByDate/:Username/:Date

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Date` | `string` | **Required**. The date to filter appointments. |

#### Patient Filter Appointments by Status

    GET /Patient/patientFilterAppsByStatus/:Username/:Status

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Status` | `string` | **Required**. The status to filter appointments. |

#### View All Appointments

    GET /Patient/allAppointments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View All Family Member Appointments

    GET /Patient/allFamilyMemberAppointments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Choose Payment Method for Health Package

    PUT /Patient/choosePaymentMethodForHP/:type/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**. The type of health package. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Wallet Amount by Patient

    GET /Patient/viewWalletAmountByPatient/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Health Packages

    GET /Patient/health-packages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages

    GET /Patient/viewSubscribedHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages of Family Member
    
    GET /Patient/viewSubscribedHealthPackagesOfFamilyMember/:Username/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription of Family Member

    POST /Patient/cancelHealthCarePackageSubscriptionOfFamMember/:Username/:Type/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription

    POST /Patient/cancelHealthCarePackageSubscription/:Username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |

#### View Health Packages

    GET /Patient/viewHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View All Appointments

    GET /Patient/allAppointments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View All Family Member Appointments

    GET /Patient/allFamilyMemberAppointments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Choose Payment Method for Health Package

    PUT /Patient/choosePaymentMethodForHP/:type/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `type` | `string` | **Required**. The type of health package. |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Wallet Amount by Patient

    GET /Patient/viewWalletAmountByPatient/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Health Packages

    GET /Patient/health-packages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages

    GET /Patient/viewSubscribedHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages of Family Member

    GET /Patient/viewSubscribedHealthPackagesOfFamilyMember/:Username/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription of Family Member

    POST /Patient/cancelHealthCarePackageSubscriptionOfFamMember/:Username/:Type/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription

    POST /Patient/cancelHealthCarePackageSubscription/:Username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |

#### View Health Packages

    GET /Patient/viewHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Wallet Amount by Patient

    GET /Patient/viewWalletAmountByPatient/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Health Packages

    GET /Patient/health-packages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages

    GET /Patient/viewSubscribedHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Subscribed Health Packages of Family Member

    GET /Patient/viewSubscribedHealthPackagesOfFamilyMember/:Username/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription of Family Member

    POST /Patient/cancelHealthCarePackageSubscriptionOfFamMember/:Username/:Type/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Cancel Health Care Package Subscription

    POST /Patient/cancelHealthCarePackageSubscription/:Username/:Type

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `Type` | `string` | **Required**. The type of health package to cancel. |

#### View Health Packages

    GET /Patient/viewHealthPackages/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Subscribe to a Health Package

    POST /Patient/subscribeToAHealthPackage/:patientUsername/:healthPackageType

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientUsername` | `string` | **Required**. The username of the patient. |
| `healthPackageType` | `string` | **Required**. The type of health package to subscribe to. |

#### Subscribe to a Health Package for Family Member

    POST /Patient/subscribeToAHealthPackageForFamilyMember/:patientUsername/:healthPackageType/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientUsername` | `string` | **Required**. The username of the patient. |
| `healthPackageType` | `string` | **Required**. The type of health package to subscribe to. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### View Health Care Package Status

    GET /Patient/viewHealthCarePackageStatus/:Username/:healthPackageType

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `healthPackageType` | `string` | **Required**. The type of health package. |

#### View Health Care Package Status of Family Member

    GET /Patient/viewHealthPackageStatusOfFamilyMember/:Username/:healthPackageType/:NationalID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `healthPackageType` | `string` | **Required**. The type of health package. |
| `NationalID` | `string` | **Required**. The national ID of the family member. |

#### Add Medical History Document

    POST /Patient/addMedicalHistoryDocument/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |

#### Delete Medical History Document

    DELETE /Patient/deleteMedicalHistoryDocument/:Username/:filePathToRemove

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `filePathToRemove` | `string` | **Required**. The path of the file to remove. |

#### View Medical History Documents

    GET /Patient/viewMedicalHistoryDocuments/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### View Health Records

    GET /Patient/viewHealthRecords/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Patient Past Appointments

    GET /Patient/patientPastApp/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Patient Upcoming Appointments

    GET /Patient/patientUpcoming/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Available Doctor Appointments

    GET /Patient/availableDoctorApps/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Select Appointment Date and Time

    POST /Patient/selectAppointment/:patientUsername/:timeSlot/:doctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientUsername` | `string` | **Required**. The username of the patient. |
| `timeSlot` | `string` | **Required**. The selected time slot. |
| `doctorUsername` | `string` | **Required**. The username of the doctor. |

#### Select Appointment Date and Time for Family Member

    POST /Patient/selectAppointmentDateTimeFamMem/:patientUsername/:timeSlot/:doctorUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientUsername` | `string` | **Required**. The username of the patient. |
| `timeSlot` | `string` | **Required**. The selected time slot. |
| `doctorUsername` | `string` | **Required**. The username of the doctor. |

#### Download Prescription PDF

    GET /Patient/downloadPrescriptionPDF/:patientUsername/:prescriptionID

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patientUsername` | `string` | **Required**. The username of the patient. |
| `prescriptionID` | `string` | **Required**. The ID of the prescription. |

#### Add Refund for Patient

    POST /Patient/AddRefundForPatient/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Request Follow-Up Appointment

    POST /Patient/requestFollowUpAppointment/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Request Follow-Up for Family Member

    POST /Patient/requestFollowUpForFamilyMember/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Link Patient Account as Family

    POST /Patient/linkPatientAccountAsFam/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View All Prescriptions

    GET /Patient/ViewAllPres/:PatientUsername

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |

#### View Prescription Details

    GET /Patient/ViewPresDetails/:PatientUsername/:id

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PatientUsername` | `string` | **Required**. The username of the patient. |
| `id` | `string` | **Required**. The ID of the prescription. |

#### Reschedule Appointment

    POST /Patient/rescheduleAppointment/:username/:appointmentId/:timeSlot

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |
| `timeSlot` | `string` | **Required**. The new time slot for the appointment. |

#### Reschedule Appointment for Family Member

    POST /Patient/rescheduleAppointmentFamMem/:username/:appointmentId/:timeSlot

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |
| `timeSlot` | `string` | **Required**. The new time slot for the appointment. |

#### Cancel Appointment

    POST /Patient/cancelAppointment/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Cancel Appointment for Family Member

    POST /Patient/cancelAppointmentFamMem/:username/:appointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `appointmentId` | `string` | **Required**. The ID of the appointment. |

#### Create Appointment Notifications

    POST /Patient/createAppointmentNotifications/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Display Notifications

    GET /Patient/displayNotifications/:Username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |

#### Send Appointment Patient Reschedule Notification Email

    POST /Patient/sendAppointmentPatientRescheduleNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

#### Send Appointment Patient Cancelled Notification Email

    POST /Patient/sendAppointmentPatientCancelledNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

#### Send Appointment Notification Email

    POST /Patient/sendAppointmentNotificationEmail/:Username/:AppointmentId

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. The username of the patient. |
| `AppointmentId` | `string` | **Required**. The ID of the appointment. |

#### Update Prescription Payment Method

    PUT /Patient/updatePrescriptionPaymentMethod/:username/:id

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the patient. |
| `id` | `string` | **Required**. The ID of the appointment. |

___

### Prescription Routes

#### Register Prescription

    POST /Prescription/Register

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *(No parameters for this request)* | | |

___

### General Routes

#### Refresh Token

    POST /refresh

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *(No parameters for this request)* | | |

#### Login

    POST /login

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *(Request body with login credentials)* | | |

#### Logout

    POST /logout/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the user to log out. |

#### Send OTP for Password Reset

    POST /OtpResetPassword

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *(Request body with necessary information)* | | |

#### Update Password (Forgot Password)

    POST /UpdatePassword

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| *(Request body with necessary information)* | | |

#### Change Password

    PUT /ChangePassword/:username

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. The username of the user whose password is being changed. |
## Tests
### Testing with Postman
#### 1. Login to Obtain Access Token
    1. Make a POST request to the login endpoint by providing your username and password in the request body.
    2. Upon successful authentication, you will receive an access token in the response.

    URL: POST /localhost:4000/login

    Request Body (JSON):
    {
        "username": "your_username",
        "password": "your_password"
    }

#### 2. Use Access Token for Subsequent Requests
    After obtaining the access token, use it to authenticate subsequent requests.
    1. Copy the access token received during login.
    2. In the new HTTP request, set the Authorization type to "Bearer Token."
    3. Paste the copied access token in the provided field.
    4. Use the access token to authenticate your requests by including it in the Authorization header.

    GET /your-endpoint

     Request Body (JSON):
     {
         your-request-body
     }
    Authorization: Bearer your_access_token 

## How to Use El7a2ny
Welcome to El7a2ny! This guide will walk you through the steps to set up and use the project. Whether you are a beginner or an experienced developer, follow these steps to get started:

### Step 1:  Clone the Repository
Clone the repository to your local machine using the following command:

    git clone https://github.com/advanced-computer-lab-2023/Suicide-squad-Clinic.git

### Step 2: Install Dependencies
Navigate to the project directory and install the required dependencies:

    cd your-project
    npm install

All the required dependencies and apps can be found under the Installation section.

### Step 3: Configure the Environment
Create a .env file in the root directory using the following command:

    touch .env

Add the necessary environment variables: 
    
    MONGO_URI = "your-MongoDB-database-link"
    PORT = your-port-number
    STRIPE_KEY = your-stripe-key
    PUBLISHABLE_KEY = your-publishable-key

### Step 4: Start the Backend Server
Start the backend server by running:

    nodemon App.js

### Step 5: Start the Frontend Server
Open a new terminal window, navigate to the project directory, and start the frontend server:

    npm start

### Step 6: Access the Application
Open your web browser and go to http://localhost:3000 to access the application.

### Step 7: Register or Log In
If it's your first time, register for a new account. Otherwise, log in using your credentials.

### Step 8: Explore and Interact
Explore the features and functionalities of the application. Follow the on-screen prompts and use the intuitive user interface.

### Step 9: Test API Endpoints
If applicable, test API endpoints using tools like Postman. Refer to the "Tests" section in the README for detailed instructions.

### Step 10: Provide Feedback
If you encounter any issues or have suggestions, feel free to open an issue on GitHub or contribute to the project.

Congratulations! You have successfully set up and used **El7a2ny**. Enjoy exploring and using the application!
## Contributing

We welcome and appreciate contributions from the community. Whether you want to report a bug, suggest a feature, or contribute code, there are several ways you can help improve El7a2ny. Here's how you can get started:

### 1. Report Issues
If you come across any bugs, issues, or have suggestions for improvements, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

### 2. Feature Requests
Have an idea for a new feature? Submit a feature request on GitHub, explaining the proposed feature and its potential benefits. We value your input in shaping the project.

### 3. Code Contributions
If you're comfortable with coding, consider contributing directly to the project. Here's how you can do it:

    1. Fork the repository.
    2. Create a new branch for your changes.
    3. Make your changes and ensure they align with the project's coding standards.
    4. Test your changes thoroughly.
    5. Submit a pull request with a clear description of your changes.

### 4. Documentation
Good documentation is crucial for a successful project. If you notice areas where the documentation can be improved or if you have additional information to add, feel free to contribute to the documentation.


## Credits

### Youtube Videos

[MERN Stack Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE)

[Introduction to React](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK)

[React Hooks](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h)

[useState VS useEffect](https://codedamn.com/news/reactjs/usestate-and-useeffect-hooks)

[JWT Authentication #1](https://www.youtube.com/watch?v=mbsmsi7l3r4)

[JWT Authentication #2](https://www.youtube.com/watch?v=-RCnNyD0L-s)

[JWT Authentication #3](https://dev.to/salarc123/mern-stack-authentication-tutorial-part-1-the-backend-1c57)

[Stripe](https://youtu.be/1r-F3FIONl8)

Finally, we would like to express our gratitude to our professor and TAs, who have played a crucial role in the development and success of this project:

**Assoc. Prof. Mervat Abuelkheir, Eng. Nada Ibrahim, Eng. Hadwa Pasha, Eng. Noha Hamid, Eng. Fatma Elazab, Eng. Amr Diab and Eng. Mahmoud Mabrouk.**

Their guidance, expertise, and support have been invaluable throughout the development process. We extend our sincere appreciation to them for their contributions.


## License

[MIT](https://choosealicense.com/licenses/mit/)

[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)

[Apache](https://choosealicense.com/licenses/apache-2.0/)

