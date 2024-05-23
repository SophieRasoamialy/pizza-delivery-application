const express = require('express');
const router = express.Router();
const PizzaBaseController = require('../controllers/pizzaBaseController');
const multer = require('multer');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Upload directory
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`); // Generate unique filename
    },
  });
  
  const upload = multer({ storage: storage });
  
  // Define the route and use the controller function
  router.post('/', upload.single('pizzaBaseImage'), PizzaBaseController.createPizzaBase);
  

// Route to get all pizza bases
router.get('/', PizzaBaseController.getAllPizzaBases);

// Route to get a pizza base by its ID
router.get('/:id', PizzaBaseController.getPizzaBaseById);

router.put('/:id', upload.single('pizzaBaseImage'), PizzaBaseController.updatePizzaBase);


// Route to delete a pizza base
router.delete('/:id', PizzaBaseController.deletePizzaBase);

// Route to increase the quantity of a pizza base
router.post('/:id/increaseQuantity', PizzaBaseController.increasePizzaBaseQuantity);

// Route to decrease the quantity of a pizza base
router.post('/:id/decreaseQuantity', PizzaBaseController.decreasePizzaBaseQuantity);

module.exports = router;
