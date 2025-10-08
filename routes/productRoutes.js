const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController');

router.get('/', productController.getHome);
router.get('/add', productController.getAddProduct);
router.post('/add', productController.postAddProduct);
router.get('/product/:id', productController.getProductDetails);

module.exports = router;