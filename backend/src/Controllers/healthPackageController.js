// controllers/healthPackageController.js
const HealthPackage = require("../Models/HealthPackage");

const getAllPackages = async (req, res) => {
  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{
    try {
      const packages = await HealthPackage.find();
      res.status(200).json(packages);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
};

const subscribeToPackage = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      // Logic for a patient subscribing to a package, e.g., creating a subscription in the database, payment logic, etc.
      res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  }
};

//Task 11 : Add health package
const createPackage = async (req, res) => {
  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      // Destructure fields from request body.
      const {
        Type, // Type of the package: Silver, Gold, Platinum
        AnnualFee, // Price per year
        DoctorSessionDiscount, // Discount on doctor's session price
        MedicineDiscount, // Discount on medicine ordered from pharmacy platform
        FamilySubscriptionDiscount, // Discount on the subscription for family members
      } = req.body;

      // Check if all fields are provided; if not, respond with a 400 status code and an error message.
      if (
        !Type ||
        !AnnualFee ||
        !DoctorSessionDiscount ||
        !MedicineDiscount ||
        !FamilySubscriptionDiscount
      ) {
        return res.status(400).json({ error: "All fields must be provided" });
      }
      const existsName = await HealthPackage.findOne({ Type: Type });
      if (existsName) {
        return res.status(400).json({ error: "Package already Exists." });
      }

      // Create a new health package instance with the provided data.
      const newPackage = new HealthPackage({
        Type,
        AnnualFee,
        DoctorSessionDiscount,
        MedicineDiscount,
        FamilySubscriptionDiscount
      });

      // Save the new package to the database.
      await newPackage.save();

      // If successful, respond with a 201 status code and the data of the new package.
      res.status(200).json({ message: "New package created", HealthPackage: newPackage });
    } catch (error) {
      // If an error occurs (e.g., a problem with the database), respond with a 500 status code and an error message.
      res.status(500).json({ error: error.message });
    }
  }
};

// Task 11: update a health package
const updatePackageByAnnualFee = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      const { Type } = req.params;

      const pack = await HealthPackage.findOne({ Type: Type });

      if (!pack) {
        return res.status(404).json({ error: "Package not found" });
      }

      const updatedPack = {
        $set: {
          AnnualFee: req.body.AnnualFee
        }
      };

      const updatedPackage = await HealthPackage.updateOne(
        { Type: Type }, // filter
        updatedPack // update
      );

      if (!updatedPackage) {
        return res.status(404).json({ error: "Package not found" });
      }
      const newPack = await HealthPackage.findOne({ Type: Type });
      res.status(200).json(newPack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const updatePackageByDoctorSessionDiscount = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      const { Type } = req.params;

      const pack = await HealthPackage.findOne({ Type: Type });

      if (!pack) {
        return res.status(404).json({ error: "Package not found" });
      }

      const updatedPack = {
        $set: {
          DoctorSessionDiscount: req.body.DoctorSessionDiscount
        }
      };
      const updatedPackage = await HealthPackage.updateOne(
        { Type: Type }, // filter
        updatedPack // update
      );

      if (!updatedPackage) {
        return res.status(404).json({ error: "Package not found" });
      }

      const newPack = await HealthPackage.findOne({ Type: Type });

      res.status(200).json(newPack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const updatePackageByMedicineDiscount = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      const { Type } = req.params;

      const pack = await HealthPackage.findOne({ Type: Type });

      if (!pack) {
        return res.status(404).json({ error: "Package not found" });
      }

      const updatedPack = {
        $set: {
          MedicineDiscount: req.body.MedicineDiscount
        }
      };
      const updatedPackage = await HealthPackage.updateOne(
        { Type: Type }, // filter
        updatedPack // update
      );

      if (!updatedPackage) {
        return res.status(404).json({ error: "Package not found" });
      }

      const newPack = await HealthPackage.findOne({ Type: Type });

      res.status(200).json(newPack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const updatePackageByFamilySubscriptionDiscount = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {
      const { Type } = req.params;

      const pack = await HealthPackage.findOne({ Type: Type });

      if (!pack) {
        return res.status(404).json({ error: "Package not found" });
      }

      const updatedPack = {
        $set: {
          FamilySubscriptionDiscount: req.body.FamilySubscriptionDiscount
        }
      };
      const updatedPackage = await HealthPackage.updateOne(
        { Type: Type }, // filter
        updatedPack // update
      );

      if (!updatedPackage) {
        return res.status(404).json({ error: "Package not found" });
      }

      const newPack = await HealthPackage.findOne({ Type: Type });

      res.status(200).json(newPack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};


// Task 11: delete a health package
const deletePackage = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{

    try {

      const { Type } = req.params;
      const deletedPackage = await HealthPackage.findOneAndDelete(
        { Type: Type } // filter
      );
      if (!deletedPackage) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.status(200).json({ message: "Package deleted", data: deletedPackage });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

const viewHealthPackageInfo = async (req, res) => {

  const {username} = req.params;
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (!(req.user.Username === username)) {
    res.status(403).json("You are not logged in!");
  }else{
    try {
      const { Type } = req.params;
      const pack = await HealthPackage.findOne({ Type: Type });
      if (!pack) {
        return res.status(404).json({ error: "Package not found" });
      }
      res.status(200).json(pack);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = {
  subscribeToPackage,
  getAllPackages,
  deletePackage,
  updatePackageByAnnualFee,
  updatePackageByDoctorSessionDiscount,
  updatePackageByFamilySubscriptionDiscount,
  updatePackageByMedicineDiscount,
  createPackage,
  viewHealthPackageInfo,
}