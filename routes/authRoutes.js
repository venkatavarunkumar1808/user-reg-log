const express = require('express');
const { registerUser, loginUser } = require('../controllers/authControllers');
const { registerValidation, loginValidation, validate } = require('../middleware/validate');

const router = express.Router();

// Register route
router.post('/register', registerValidation, validate, registerUser);

// Login route
router.post('/login', loginValidation, validate, loginUser);

module.exports = router;
