const mongoose = require('mongoose');

const veggiesSchema = new mongoose.Schema({
    veggiesName: {
        type: String,
        required: true
    },
    veggiesQuantite: {
        type: Number,
        default: 0
    },
    veggiesNameImage: {
        type: String 
    }
});

const Veggies = mongoose.model('Veggies', veggiesSchema);

module.exports = Veggies;
