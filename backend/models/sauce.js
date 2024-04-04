const mongoose = require('mongoose');

const sauceSchema = new mongoose.Schema({
    sauceName: {
        type: String,
        required: true
    },
    sauceQuantite: {
        type: Number,
        default: 0
    }
});

const Sauce = mongoose.model('Sauce', sauceSchema);

module.exports = Sauce;
