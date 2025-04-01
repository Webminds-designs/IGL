const express = require('express');
const router = express.Router();
const { submitRegistration } = require('../controllers/registrationController');

router.post('/submit', submitRegistration);

module.exports = router;