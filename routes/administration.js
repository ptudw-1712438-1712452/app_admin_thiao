var express = require('express');
var router = express.Router();
var controller = require('../controllers/administration');


router.get('/listUser', controller.listUser);
router.get('/userDetail/:id',controller.userDetail );
router.get('/listOrder', controller.showListOrder);
router.get('/orderDetail/:id', controller.orderDetail);
router.post('/orderDetail/:id', controller.updateStatus);

module.exports = router;