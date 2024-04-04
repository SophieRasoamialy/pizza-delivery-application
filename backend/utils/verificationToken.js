const jwt = require('jsonwebtoken');

// Function to generate a verification token
const generateVerificationToken = (userId) => {
    return jwt.sign({ userId }, process.env.EMAIL_SECRET, { expiresIn: '1h' });
};

module.exports = generateVerificationToken;
