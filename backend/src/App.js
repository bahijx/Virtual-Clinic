// External variables
const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const patientRoutes = require("../src/Routes/Patient"); // Require Patient
const adminRoutes = require('../src/Routes/Administrator'); //require admin
const healthPackageRoutes = require('../src/Routes/HealthPackage'); //require health package
const guestDoctorRoutes = require('../src/Routes/GuestDoctor'); //require guest doctor
const appointmentRoutes = require('../src/Routes/Appointment');
const familyMemberRoutes = require('../src/Routes/FamilyMember');
const prescriptionRoutes = require('../src/Routes/Prescription');
const doctorRoutes = require('../src/Routes/Doctor'); //
const Admin = require('../src/Models/Administrator')

const MongoURI = process.env.MONGO_URI;


//App variables
const app = express();

const http = require("http");

const server = http.createServer(app);

const {Server} = require("socket.io");

const io = new Server(server, {
  cors:{
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
  }
})

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  
  socket.on("disconnect", () => {
  console.log("User Disconnected", socket.id);
  });
});

app.use(express.json());
app.use(bodyParser.json());




const port = process.env.PORT || "4000";
/////////////////////////////////////////////////////////
//A method to create an admin at the begginning of the server "3shan mainf3shanesh n-create admin "
// const createInitialAdmin = async () => {
//   try {
//     const adminExists = await Admin.findOne({ Username: "admin" });

//     if (!adminExists) {
//       // Createnew admin
//       const initialAdmin = new Admin({
//         Username: "admin",
//         Password: "basma"
//       });
//       await initialAdmin.save();
//       console.log("Admin initialized with username: admin and password: basma");
//     } else {
//       console.log("Admin already exists");
//     }
//   } catch (error) {
//     console.error("Error initializing admin:", error);
//   }
// };
////////////////////////////////////////////////////////

// configurations
// Mongo DB
mongoose.connect(MongoURI)
  .then(() => {
    console.log("MongoDB is now connected!")
   // createInitialAdmin();
    // Starting server
    server.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    })
  })
  .catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
  res.status(200).send("You have everything installed!");
});

app.use(cookieParser());

//login + loout + token
const {
  refresh,
  verify,
  login,
  logout
} = require('./Controllers/loginController');

app.post("/refresh", refresh);
app.post("/login", login);
app.post("/logout/:username", verify, logout);

//OTP + Change password routes
const {
  sendOTP,
  updatePassword,
  changePassword
} = require('../src/Controllers/OtpController')


app.post('/OtpResetPassword', sendOTP);
app.post('/UpdatePassword', updatePassword); // forgot password
app.put('/ChangePassword/:username', changePassword); // resetting password normally


// Registering Routes

app.use('/Admin', adminRoutes);

app.use("/Appointment", appointmentRoutes);

app.use("/Doctor", doctorRoutes);

app.use("/FamilyMember", familyMemberRoutes);

app.use('/GuestDoctor', guestDoctorRoutes);

app.use('/HealthPackage', healthPackageRoutes);

app.use("/Patient", patientRoutes);

app.use("/Prescription", prescriptionRoutes);


