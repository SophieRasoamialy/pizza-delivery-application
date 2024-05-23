const express = require('express');
const router = express.Router();
const veggiesController = require('../controllers/veggiesController');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Veggies routes
router.post('/', upload.single('veggiesNameImage'), veggiesController.createVeggies);
router.get('/', veggiesController.getAllVeggies);
router.get('/:id', veggiesController.getVeggiesById);
router.put('/:id', upload.single('veggiesNameImage'), veggiesController.updateVeggies);
router.delete('/:id', veggiesController.deleteVeggies);
router.post('/:id/increase', veggiesController.increaseVeggiesQuantity);
router.post('/:id/decrease', veggiesController.decreaseVeggiesQuantity);

module.exports = router;
