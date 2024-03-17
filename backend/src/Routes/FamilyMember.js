const express = require('express');
const registerFamilyMember = require('../Controllers/FamilyMemberController')

const router = express.Router();

const { verify } = require('../Controllers/loginController');


// register route
router.post('/Register', registerFamilyMember)

module.exports = router
