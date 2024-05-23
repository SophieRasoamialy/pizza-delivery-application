const Sauce = require('../models/Sauce'); // Assuming Sauce model is in the models directory
const multer = require('multer');
const path = require('path');

// Set up multer for file handling
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination directory for uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
    }
});
const upload = multer({ storage: storage });

// Controller functions
const getSauces = async (req, res) => {
    try {
        const sauces = await Sauce.find();
        res.json(sauces);
    } catch (error) {
        console.error('Error fetching sauces:', error);
        res.status(500).json({ message: 'Error fetching sauces' });
    }
};

const getSauceById = async (req, res) => {
    try {
        const sauce = await Sauce.findById(req.params.id);
        if (!sauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }
        res.json(sauce);
    } catch (error) {
        console.error('Error fetching sauce:', error);
        res.status(500).json({ message: 'Error fetching sauce' });
    }
};

const createSauce = async (req, res) => {
    try {
        const { sauceName, sauceQuantite } = req.body;
        const sauceImage = req.file ? `/uploads/${req.file.filename}` : null;

        const newSauce = new Sauce({
            sauceName,
            sauceQuantite,
            sauceImage
        });

        await newSauce.save();
        res.status(201).json(newSauce);
    } catch (error) {
        console.error('Error creating sauce:', error);
        res.status(500).json({ message: 'Error creating sauce' });
    }
};

const updateSauce = async (req, res) => {
    try {
        const { sauceName, sauceQuantite } = req.body;
        const sauceImage = req.file ? `/uploads/${req.file.filename}` : req.body.sauceImage;

        const updatedSauce = await Sauce.findByIdAndUpdate(
            req.params.id,
            { sauceName, sauceQuantite, sauceImage },
            { new: true }
        );

        if (!updatedSauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }

        res.json(updatedSauce);
    } catch (error) {
        console.error('Error updating sauce:', error);
        res.status(500).json({ message: 'Error updating sauce' });
    }
};

const deleteSauce = async (req, res) => {
    try {
        const deletedSauce = await Sauce.findByIdAndDelete(req.params.id);

        if (!deletedSauce) {
            return res.status(404).json({ message: 'Sauce not found' });
        }

        res.json({ message: 'Sauce deleted successfully' });
    } catch (error) {
        console.error('Error deleting sauce:', error);
        res.status(500).json({ message: 'Error deleting sauce' });
    }
};

// Export controller functions
module.exports = {
    getSauces,
    getSauceById,
    createSauce,
    updateSauce,
    deleteSauce,
    upload // Export the multer upload middleware for use in routes
};
