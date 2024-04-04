const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    // Define username field with type String, required, and unique
    username: { type: String, required: true, unique: true },
    // Define email field with type String, required, and unique
    email: { type: String, required: true, unique: true },
    // Define password field with type String and required
    password: { type: String, required: true },
    // Define isAdmin field with type Boolean and default value as false
    isAdmin: { type: Boolean, default: false }
});

// Create a model based on the user schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
