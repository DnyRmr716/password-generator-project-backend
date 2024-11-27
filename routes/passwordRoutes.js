const express = require('express');
const { generatePassword } = require('../controllers/passwordController');

const router = express.Router();


app.post('/generate-password', (req, res) => {
    const { length, options } = req.body;
  
    // Enforce maximum password length
    const cappedLength = Math.min(length, 999);
  
    if (!cappedLength || !options) {
      return res.status(400).json({ error: 'Length and options are required.' });
    }
  
    const password = generatePassword(cappedLength, options);
    res.json({ password });
});

module.exports = router;
