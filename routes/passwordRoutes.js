const express = require('express');
const { generatePassword } = require('../controllers/passwordController');

const router = express.Router();

router.post('/generate-password', generatePassword);

module.exports = router;
