const OtherIngredients = require('../models/otherIngredients');

// Function to create a new other ingredient
exports.createOtherIngredient = async (req, res) => {
    try {
        const { otherIngredientName, otherIngredientQuantite } = req.body;
        const newOtherIngredient = new OtherIngredients({ otherIngredientName, otherIngredientQuantite });
        await newOtherIngredient.save();
        res.status(201).json({ message: 'New other ingredient created successfully', data: newOtherIngredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get all other ingredients
exports.getAllOtherIngredients = async (req, res) => {
    try {
        const otherIngredients = await OtherIngredients.find();
        res.status(200).json(otherIngredients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get an other ingredient by its ID
exports.getOtherIngredientById = async (req, res) => {
    try {
        const otherIngredient = await OtherIngredients.findById(req.params.id);
        if (!otherIngredient) {
            return res.status(404).json({ message: 'Other ingredient not found' });
        }
        res.status(200).json(otherIngredient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update an other ingredient
exports.updateOtherIngredient = async (req, res) => {
    try {
        const { otherIngredientName, otherIngredientQuantite } = req.body;
        const updatedOtherIngredient = await OtherIngredients.findByIdAndUpdate(req.params.id, { otherIngredientName, otherIngredientQuantite }, { new: true });
        if (!updatedOtherIngredient) {
            return res.status(404).json({ message: 'Other ingredient not found' });
        }
        res.status(200).json({ message: 'Other ingredient updated successfully', data: updatedOtherIngredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete an other ingredient
exports.deleteOtherIngredient = async (req, res) => {
    try {
        const deletedOtherIngredient = await OtherIngredients.findByIdAndDelete(req.params.id);
        if (!deletedOtherIngredient) {
            return res.status(404).json({ message: 'Other ingredient not found' });
        }
        res.status(200).json({ message: 'Other ingredient deleted successfully', data: deletedOtherIngredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to increase the quantity of an other ingredient
exports.increaseOtherIngredientQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const otherIngredient = await OtherIngredients.findById(req.params.id);
        if (!otherIngredient) {
            return res.status(404).json({ message: 'Other ingredient not found' });
        }
        otherIngredient.otherIngredientQuantite += quantity;
        await otherIngredient.save();
        res.status(200).json({ message: 'Other ingredient quantity increased successfully', data: otherIngredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to decrease the quantity of an other ingredient
exports.decreaseOtherIngredientQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const otherIngredient = await OtherIngredients.findById(req.params.id);
        if (!otherIngredient) {
            return res.status(404).json({ message: 'Other ingredient not found' });
        }
        if (otherIngredient.otherIngredientQuantite < quantity) {
            return res.status(400).json({ message: 'Insufficient quantity' });
        }
        otherIngredient.otherIngredientQuantite -= quantity;
        await otherIngredient.save();
        res.status(200).json({ message: 'Other ingredient quantity decreased successfully', data: otherIngredient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
