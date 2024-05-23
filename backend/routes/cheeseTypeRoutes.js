const express = require('express');
const router = express.Router();
const cheeseTypeController = require('../controllers/cheeseTypeController');
const multer = require('multer');

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// Create a new cheese type
router.post('/', upload.single('cheeseImage'), cheeseTypeController.createCheeseType);

// Get all cheese types
router.get('/', cheeseTypeController.getAllCheeseTypes);

// Get a cheese type by ID
router.get('/:id', cheeseTypeController.getCheeseTypeById);

// Update a cheese type by ID
router.put('/:id', upload.single('cheeseImage'), cheeseTypeController.updateCheeseType);

// Delete a cheese type by ID
router.delete('/:id', cheeseTypeController.deleteCheeseType);

module.exports = router;
