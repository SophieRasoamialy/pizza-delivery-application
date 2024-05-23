const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauceController');

router.get('/', sauceController.getSauces);
router.get('/:id', sauceController.getSauceById);
router.post('/', sauceController.upload.single('sauceImage'), sauceController.createSauce);
router.put('/:id', sauceController.upload.single('sauceImage'), sauceController.updateSauce);
router.delete('/:id', sauceController.deleteSauce);

module.exports = router;
