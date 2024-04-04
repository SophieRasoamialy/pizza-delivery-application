const Veggies = require('../models/veggies');

// Function to create a new veggies
exports.createVeggies = async (req, res) => {
    try {
        const { veggiesName, veggiesQuantite } = req.body;
        const newVeggies = new Veggies({ veggiesName, veggiesQuantite });
        await newVeggies.save();
        res.status(201).json({ message: 'New veggies created successfully', data: newVeggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get all veggies
exports.getAllVeggies = async (req, res) => {
    try {
        const veggies = await Veggies.find();
        res.status(200).json(veggies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get a veggies by its ID
exports.getVeggiesById = async (req, res) => {
    try {
        const veggies = await Veggies.findById(req.params.id);
        if (!veggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }
        res.status(200).json(veggies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update a veggies
exports.updateVeggies = async (req, res) => {
    try {
        const { veggiesName, veggiesQuantite } = req.body;
        const updatedVeggies = await Veggies.findByIdAndUpdate(req.params.id, { veggiesName, veggiesQuantite }, { new: true });
        if (!updatedVeggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }
        res.status(200).json({ message: 'Veggies updated successfully', data: updatedVeggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete a veggies
exports.deleteVeggies = async (req, res) => {
    try {
        const deletedVeggies = await Veggies.findByIdAndDelete(req.params.id);
        if (!deletedVeggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }
        res.status(200).json({ message: 'Veggies deleted successfully', data: deletedVeggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to increase the quantity of a veggies
exports.increaseVeggiesQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const veggies = await Veggies.findById(req.params.id);
        if (!veggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }
        veggies.veggiesQuantite += quantity;
        await veggies.save();
        res.status(200).json({ message: 'Veggies quantity increased successfully', data: veggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to decrease the quantity of a veggies
exports.decreaseVeggiesQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const veggies = await Veggies.findById(req.params.id);
        if (!veggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }
        if (veggies.veggiesQuantite < quantity) {
            return res.status(400).json({ message: 'Insufficient quantity' });
        }
        veggies.veggiesQuantite -= quantity;
        await veggies.save();
        res.status(200).json({ message: 'Veggies quantity decreased successfully', data: veggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
