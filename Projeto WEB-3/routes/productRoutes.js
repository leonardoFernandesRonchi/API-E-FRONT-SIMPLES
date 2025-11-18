const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');


router.post('/', productController.create);
router.get('/', productController.list);
router.get('/:id', productController.get);
router.delete('/:id', productController.delete);
router.put('/:id', productController.update);


module.exports = router;