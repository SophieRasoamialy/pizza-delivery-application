const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const { sendVerificationEmail, sendPasswordResetEmail } = require('../utils/emailUtils');
const generateVerificationToken = require('../utils/verificationToken');



// Function to create a user account
exports.register = async (req, res) => {
    // Get request data
    const { username, email, password } = req.body;

    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user already exists in the database
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, email, password: hashedPassword });

        // Save the user to the database
        await newUser.save();

         // Generate verification token
         const verificationToken = generateVerificationToken(newUser._id);

         // Send verification email
         await sendVerificationEmail(email, verificationToken);

        // Respond with success
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to log in a user
exports.login = async (req, res) => {
    // Get request data
    const { email, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Respond with success along with the JWT token
        res.status(200).json({ token });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to log out a user
exports.logout = async (req, res) => {
    try {
        res.clearCookie('jwt');
        
        // Respond with success message
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to verify email
exports.verifyEmail = async (req, res) => {
    // Get verification token from URL params
    const { token } = req.params;

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.EMAIL_SECRET);

        // Find the user by userId in the token
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update user's isVerified field to true
        user.isVerified = true;
        await user.save();

        // Respond with success message
        res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to initiate password reset
exports.forgotPassword = async (req, res) => {
    // Get user's email from request body
    const { email } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate a password reset token
        const resetToken = jwt.sign({ userId: user._id }, process.env.RESET_SECRET, { expiresIn: '1h' });

        // Send password reset email
        await sendPasswordResetEmail(email, resetToken);

        // Respond with success message
        res.status(200).json({ message: "Password reset email sent successfully" });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to reset password using the token
exports.resetPassword = async (req, res) => {
    // Get reset token from URL params and new password from request body
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        // Verify the reset token
        const decoded = jwt.verify(token, process.env.RESET_SECRET);

        // Find the user by userId in the token
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password
        user.password = hashedPassword;
        await user.save();

        // Respond with success message
        res.status(200).json({ message: "Password reset successfully" });
    } catch (error) {
        // In case of error, respond with an error code and error message
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};