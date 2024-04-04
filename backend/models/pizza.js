const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        pizzaBase: { type: mongoose.Schema.Types.ObjectId, ref: 'PizzaBase' },
        sauce: { type: mongoose.Schema.Types.ObjectId, ref: 'Sauce' },
        cheeseType: { type: mongoose.Schema.Types.ObjectId, ref: 'CheeseType' },
        veggies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Veggies' }],
        otherIngredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OtherIngredients' }]
    },
    size: String,
    price: Number
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
