const PizzaBase = require('../models/pizzaBase');
const multer = require('multer');
const path = require('path');

exports.createPizzaBase = async (req, res) => {
    try {
      const { pizzaBaseName, pizzaBaseQuantite } = req.body;
      const file = req.file; // Uploaded file from multer
  
      if (!file) {
        return res.status(400).json({ message: 'No image uploaded' });
      }
  
      // Create a new pizza base instance
      const newPizzaBase = new PizzaBase({
        pizzaBaseName,
        pizzaBaseQuantite,
        pizzaBaseImage: `/${file.path}`, // Save file path relative to the server
      });
  
      // Save the new pizza base to the database
      const savedPizzaBase = await newPizzaBase.save();
  
      res.status(201).json(savedPizzaBase);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating pizza base' });
    }
  };

// Function to get all pizza bases
exports.getAllPizzaBases = async (req, res) => {
    try {
        const pizzaBases = await PizzaBase.find();
        res.status(200).json(pizzaBases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to get a pizza base by its ID
exports.getPizzaBaseById = async (req, res) => {
    try {
        const pizzaBase = await PizzaBase.findById(req.params.id);
        if (!pizzaBase) {
            return res.status(404).json({ message: 'Pizza base not found' });
        }
        res.status(200).json(pizzaBase);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to update a pizza base
exports.updatePizzaBase = async (req, res) => {
    try {
        const { pizzaBaseName, pizzaBaseQuantite } = req.body;
        const file = req.file; // Uploaded file from multer

        const updateData = {
            pizzaBaseName,
            pizzaBaseQuantite,
        };

        if (file) {
            updateData.pizzaBaseImage = `/${file.path}`; // Save file path relative to the server
        }

        const updatedPizzaBase = await PizzaBase.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!updatedPizzaBase) {
            return res.status(404).json({ message: 'Pizza base not found' });
        }

        res.status(200).json({ message: 'Pizza base updated successfully', data: updatedPizzaBase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to delete a pizza base
exports.deletePizzaBase = async (req, res) => {
    try {
        const deletedPizzaBase = await PizzaBase.findByIdAndDelete(req.params.id);
        if (!deletedPizzaBase) {
            return res.status(404).json({ message: 'Pizza base not found' });
        }
        res.status(200).json({ message: 'Pizza base deleted successfully', data: deletedPizzaBase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to increase the quantity of a pizza base
exports.increasePizzaBaseQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const pizzaBase = await PizzaBase.findById(req.params.id);
        if (!pizzaBase) {
            return res.status(404).json({ message: 'Pizza base not found' });
        }
        pizzaBase.pizzaBaseQuantite += quantity;
        await pizzaBase.save();
        res.status(200).json({ message: 'Pizza base quantity increased successfully', data: pizzaBase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to decrease the quantity of a pizza base
exports.decreasePizzaBaseQuantity = async (req, res) => {
    try {
        const { quantity } = req.body;
        const pizzaBase = await PizzaBase.findById(req.params.id);
        if (!pizzaBase) {
            return res.status(404).json({ message: 'Pizza base not found' });
        }
        if (pizzaBase.pizzaBaseQuantite < quantity) {
            return res.status(400).json({ message: 'Insufficient quantity' });
        }
        pizzaBase.pizzaBaseQuantite -= quantity;
        await pizzaBase.save();
        res.status(200).json({ message: 'Pizza base quantity decreased successfully', data: pizzaBase });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
