const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/order-controller')

router.get('/', OrderController.getAllOrders);

router.get('/:id_order', OrderController.getOrderById)

router.post('/', OrderController.createOrder);

router.put('/:id_order', OrderController.updateOrder);

router.delete('/:id_order', OrderController.deleteOrder);

module.exports = router;