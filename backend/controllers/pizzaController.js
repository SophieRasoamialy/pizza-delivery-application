const Pizza = require('../models/pizza');

// Create a new pizza
exports.createPizza = async (req, res) => {
    try {
        const pizza = new Pizza(req.body);
        await pizza.save();
        res.status(201).json({ success: true, pizza });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get all pizzas
exports.getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json({ success: true, pizzas });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get a single pizza by ID
exports.getPizzaById = async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (!pizza) {
            return res.status(404).json({ success: false, message: 'Pizza not found' });
        }
        res.status(200).json({ success: true, pizza });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Update a pizza by ID
exports.updatePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pizza) {
            return res.status(404).json({ success: false, message: 'Pizza not found' });
        }
        res.status(200).json({ success: true, pizza });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Delete a pizza by ID
exports.deletePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndDelete(req.params.id);
        if (!pizza) {
            return res.status(404).json({ success: false, message: 'Pizza not found' });
        }
        res.status(200).json({ success: true, message: 'Pizza deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
