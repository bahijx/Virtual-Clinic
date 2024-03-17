
// controller
const FamilyMemberModel = require('../Models/FamilyMember');
const { default: mongoose } = require('mongoose');

const registerFamilyMember = async (req, res) => {

    const {
        Name,
        NationalID,
        Age,
        Gender,
        RelationToPatient
    } = req.body;

    try {
        const FamilyMember = await FamilyMemberModel.create({
            Name,
            NationalID,
            Age,
            Gender,
            RelationToPatient
        });
        await FamilyMember.save();
        res.status(200).json({FamilyMember});
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = registerFamilyMember;


