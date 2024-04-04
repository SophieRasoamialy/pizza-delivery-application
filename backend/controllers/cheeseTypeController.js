const CheeseType = require('../models/cheeseType');

// Function to create a new cheese type
exports.createCheeseType = async (req, res) => {
    try {
        const { cheeseTypeName, cheeseTypeQuantite } = req.body;
        const newCheeseType = new CheeseType({ cheeseTypeName, cheeseTypeQuantite });
        await newCheeseType.save();
        res.status(201).json({ message: 'New cheese type created successfully', data: newCheeseType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get all cheese types
exports.getAllCheeseTypes = async (req, res) => {
    try {
        const cheeseTypes = await CheeseType.find();
        res.status(200).json(cheeseTypes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get a cheese type by its ID
exports.getCheeseTypeById = async (req, res) => {
    try {
        const cheeseType = await CheeseType.findById(req.params.id);
        if (!cheeseType) {
            return res.status(404).json({ message: 'Cheese type not found' });
        }
        res.status(200).json(cheeseType);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update a cheese type
exports.updateCheeseType = async (req, res) => {
    try {
        const { cheeseTypeName, cheeseTypeQuantite } = req.body;
        const updatedCheeseType = await CheeseType.findByIdAndUpdate(req.params.id, { cheeseTypeName, cheeseTypeQuantite }, { new: true });
        if (!updatedCheeseType) {
            return res.status(404).json({ message: 'Cheese type not found' });
        }
        res.status(200).json({ message: 'Cheese type updated successfully', data: updatedCheeseType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete a cheese type
exports.deleteCheeseType = async (req, res) => {
    try {
        const deletedCheeseType = await CheeseType.findByIdAndDelete(req.params.id);
        if (!deletedCheeseType) {
            return res.status(404).json({ message: 'Cheese type not found' });
        }
        res.status(200).json({ message: 'Cheese type deleted successfully', data: deletedCheeseType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to increase the quantity of a cheese type
exports.increaseCheeseTypeQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cheeseType = await CheeseType.findById(req.params.id);
        if (!cheeseType) {
            return res.status(404).json({ message: 'Cheese type not found' });
        }
        cheeseType.cheeseTypeQuantite += quantity;
        await cheeseType.save();
        res.status(200).json({ message: 'Cheese type quantity increased successfully', data: cheeseType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to decrease the quantity of a cheese type
exports.decreaseCheeseTypeQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const cheeseType = await CheeseType.findById(req.params.id);
        if (!cheeseType) {
            return res.status(404).json({ message: 'Cheese type not found' });
        }
        if (cheeseType.cheeseTypeQuantite < quantity) {
            return res.status(400).json({ message: 'Insufficient quantity' });
        }
        cheeseType.cheeseTypeQuantite -= quantity;
        await cheeseType.save();
        res.status(200).json({ message: 'Cheese type quantity decreased successfully', data: cheeseType });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
