const Sauce = require('../models/sauce');

// Function to create a new sauce
exports.createSauce = async (req, res) => {
    try {
        const { sauceName, sauceQuantite } = req.body;
        const newSauce = new Sauce({ sauceName, sauceQuantite });
        await newSauce.save();
        res.status(201).json({ message: 'New sauce created successfully', data: newSauce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get all sauces
exports.getAllSauces = async (req, res) => {
    try {
        const sauces = await Sauce.find();
        res.status(200).json(sauces);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get a sauce by its ID
exports.getSauceById = async (req, res) => {
    try {
        const sauce = await Sauce.findById(req.params.id);
        if (!sauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        res.status(200).json(sauce);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update a sauce
exports.updateSauce = async (req, res) => {
    try {
        const { sauceName, sauceQuantite } = req.body;
        const updatedSauce = await Sauce.findByIdAndUpdate(req.params.id, { sauceName, sauceQuantite }, { new: true });
        if (!updatedSauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        res.status(200).json({ message: 'Sauce updated successfully', data: updatedSauce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete a sauce
exports.deleteSauce = async (req, res) => {
    try {
        const deletedSauce = await Sauce.findByIdAndDelete(req.params.id);
        if (!deletedSauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        res.status(200).json({ message: 'Sauce deleted successfully', data: deletedSauce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to increase the quantity of a sauce
exports.increaseSauceQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const sauce = await Sauce.findById(req.params.id);
        if (!sauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        sauce.sauceQuantite += quantity;
        await sauce.save();
        res.status(200).json({ message: 'Sauce quantity increased successfully', data: sauce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to decrease the quantity of a sauce
exports.decreaseSauceQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const sauce = await Sauce.findById(req.params.id);
        if (!sauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        if (sauce.sauceQuantite < quantity) {
            return res.status(400).json({ message: 'Insufficient quantity' });
        }
        sauce.sauceQuantite -= quantity;
        await sauce.save();
        res.status(200).json({ message: 'Sauce quantity decreased successfully', data: sauce });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
