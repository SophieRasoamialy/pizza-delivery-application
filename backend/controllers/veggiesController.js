const Veggies = require('../models/veggies');
const multer = require('multer');
const path = require('path');

exports.createVeggies = async (req, res) => {
    try {
        const { veggiesName, veggiesQuantite } = req.body;
        const file = req.file; // Uploaded file from multer

        if (!file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        // Create a new veggies instance
        const newVeggies = new Veggies({
            veggiesName,
            veggiesQuantite,
            veggiesNameImage: `/${file.path}`, // Save file path relative to the server
        });

        // Save the new veggies to the database
        const savedVeggies = await newVeggies.save();

        res.status(201).json(savedVeggies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating veggies' });
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

// Function to get veggies by its ID
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

// Function to update veggies
exports.updateVeggies = async (req, res) => {
    try {
        const { veggiesName, veggiesQuantite } = req.body;
        const file = req.file; // Uploaded file from multer

        const updateData = {
            veggiesName,
            veggiesQuantite,
        };

        if (file) {
            updateData.veggiesNameImage = `/${file.path}`; // Save file path relative to the server
        }

        const updatedVeggies = await Veggies.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedVeggies) {
            return res.status(404).json({ message: 'Veggies not found' });
        }

        res.status(200).json({ message: 'Veggies updated successfully', data: updatedVeggies });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete veggies
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

// Function to increase the quantity of veggies
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

// Function to decrease the quantity of veggies
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
