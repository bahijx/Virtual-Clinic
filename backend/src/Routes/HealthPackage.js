const express = require("express");
const healthPackageController = require("../Controllers/healthPackageController");
const router = express.Router();
//const authorizeAdmin = require("../middleware/authorizeAdmin");

const { verify } = require('../Controllers/loginController');


router.get("/packages/:username", verify, healthPackageController.getAllPackages);
router.post("/subscribe/:username", verify, healthPackageController.subscribeToPackage);
router.post("/create/:username", verify, healthPackageController.createPackage);

router.put("/updateAnnualFee/:username/:Type", verify, healthPackageController.updatePackageByAnnualFee);
router.put("/updateDoctorSessionDiscount/:username/:Type", verify, healthPackageController.updatePackageByDoctorSessionDiscount);
router.put("/updateFamilySubscriptionDiscount/:username/:Type", verify, healthPackageController.updatePackageByFamilySubscriptionDiscount);
router.put("/updateMedicineDiscount/:username/:Type", verify, healthPackageController.updatePackageByMedicineDiscount);

router.delete("/delete/:username/:Type", verify, healthPackageController.deletePackage);
router.get("/view/:username/:Type", verify, healthPackageController.viewHealthPackageInfo);

module.exports = router;
