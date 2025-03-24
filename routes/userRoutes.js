const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Inscription
router.post('/register', userController.registerUser);

// Connexion
router.post('/login', userController.loginUser);

module.exports = router;
