const mongoose = require('mongoose');

const otherIngredientsSchema = new mongoose.Schema({
    otherIngredientName: {
        type: String,
        required: true
    },
    otherIngredientQuantite: {
        type: Number,
        default: 0
    }
});

const OtherIngredients = mongoose.model('OtherIngredients', otherIngredientsSchema);

module.exports = OtherIngredients;
