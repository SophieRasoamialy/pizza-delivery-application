const CheeseType = require('../models/cheeseType');

// Create a new cheese type
exports.createCheeseType = async (req, res) => {
    try {
        const { cheeseTypeName, cheeseTypeQuantite } = req.body;
        const file = req.file; // Uploaded file from multer

        if (!file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        // Create a new cheese type instance
        const newCheeseType = new CheeseType({
            cheeseTypeName,
            cheeseTypeQuantite,
            cheeseImage: `/${file.path}`, // Save file path relative to the server
        });

        // Save the new cheese type to the database
        const savedCheeseType = await newCheeseType.save();

        res.status(201).json(savedCheeseType);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating cheese type' });
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
        const file = req.file; // Uploaded file from multer

        const updateData = {
            cheeseTypeName,
            cheeseTypeQuantite,
        };

        if (file) {
            updateData.cheeseImage = `/${file.path}`; // Save file path relative to the server
        }

        const updatedCheeseType = await CheeseType.findByIdAndUpdate(req.params.id, updateData, { new: true });

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
