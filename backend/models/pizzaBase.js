const mongoose = require('mongoose');

const pizzaBaseSchema = new mongoose.Schema({
    pizzaBaseName: {
        type: String,
        required: true
    },
    pizzaBaseQuantite: {
        type: Number,
        default: 0
    },
    pizzaBaseImage: {
        type: String 
    }
});

const PizzaBase = mongoose.model('PizzaBase', pizzaBaseSchema);

module.exports = PizzaBase;
