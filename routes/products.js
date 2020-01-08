var express = require('express');
var router = express.Router();
var controller = require('../controllers/products');


router.get('/productsBoy', controller.showProductsBoy);
router.get('/editProduct/:id', controller.getUpdateProduct);
router.post('/editProduct/:id', controller.postUpdateProduct);
router.get('/insertProduct', controller.getInsertProduct);
router.post('/insertProduct', controller.postInsertProduct);
router.post('/deleteProduct', controller.deleteProduct);
router.get('/productsBoy1', controller.showProductsBoy1);
router.get('/productsBoy2', controller.showProductsBoy2);
router.get('/productsGirl', controller.showProductsGirl);
router.get('/productsGirl1',controller.showProductsGirl1);
router.get('/productsGirl2', controller.showProductsGirl2);
router.get('/productSport1', controller.showProductsSport1);
router.get('/productSport2',controller.showProductsSport2);
router.get('/search', controller.search);

module.exports = router;