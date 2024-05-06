const mongoose = require('mongoose');

const cheeseTypeSchema = new mongoose.Schema({
    cheeseTypeName: {
        type: String,
        required: true
    },
    cheeseTypeQuantite: {
        type: Number,
        default: 0
    },
    cheeseImage: {
        type: String 
    }
});

const CheeseType = mongoose.model('CheeseType', cheeseTypeSchema);

module.exports = CheeseType;
