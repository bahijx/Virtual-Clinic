const express = require("express");

// controller functions
const adminController = require("../Controllers/adminController");

const router = express.Router();

// #Routing to adminController here

router.use(express.json());

const { verify } = require('../Controllers/loginController');


router.post("/createAdmin/:username", verify, adminController.createAdmin);
router.delete("/deleteEntity/:username/:entityType/:Username", verify, adminController.deleteEntity);
router.get("/viewUnapprovedDoctors/:username", verify, adminController.viewUnapprovedDoctors);
router.get("/viewDoctorInfo/:username/:Username", verify, adminController.viewDoctorInfo);
router.post('/acceptOrRejectDoctorRequest/:username/:Username', verify, adminController.acceptOrRejectDoctorRequest);
router.post("/createContract/:username", verify, adminController.createContract);

//app.post("/addUser",createUser);
//router.get("/doctorInfo", getDocInfo);
//app.put("/updateUser", updateUser);

module.exports = router;
