const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Route for user registration
router.post('/register', UserController.register);

// Route for user login
router.post('/login', UserController.login);

// Route for logging out a user
router.post('/logout', UserController.logout);

// Route for email verification
router.get('/verify-email/:token', UserController.verifyEmail);

// Route to initiate password reset
router.post('/forgot-password', UserController.forgotPassword);

// Route to reset password using the token
router.post('/reset-password/:token', UserController.resetPassword);

module.exports = router;
