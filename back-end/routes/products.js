const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product-controller')


router.get('/', ProductController.getAllProducts);

router.get('/:id_product', ProductController.getProductById);

router.post('/', ProductController.createProduct);

router.put('/:id_product', ProductController.updateProduct);

router.delete('/:id_product', ProductController.deleteProduct);

module.exports = router;