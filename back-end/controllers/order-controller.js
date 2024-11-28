const Order = require('../models/orderModel');
const Product = require('../models/productModel');


exports.getAllOrders = async (req, res, next) => {
    try{
        const orders = await Order.findAll({
            include: {
                model: Product,
                attributes: ['description', 'price']
            }
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send({ error: 'Error when find all orders'})
    }
};

exports.getOrderById = async (req,res, next) => {
    try {
        const order = await Order.findOne({
            where: { id: req.params.id_order}
        });

        if (!order) {
            return res.status(404).json({ error: 'Order not found'});
        }

        const product = await Product.findOne({
            where: { id: order.id_product}
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found'});
        }

        res.status(200).json({
            amount: order.amount,
            product: {
                id: product.id,
                description: product.description,
                price: product.price
            }
        });
    } catch(error) {
        console.error('Error details', error);
        res.status(500).send({ error: 'Error finding specific order'})
    }
}

exports.createOrder = async (req, res, next) => {
    try{
        const {id_product, amount} = req.body;

        const product = await Product.findOne(
            { where: { id: id_product} }
        );
        if (!product) {
            return res.status(404).json({ error: 'Product not found'});
        }
        const order = await Order.create({
            id_product,
            amount,
        });
        res.status(201).json({
            orderId: order.id,
            amount: order.amount,
            product: {
                id: id_product,
                description: product.description,
                price: product.price,
            }
        });
    } catch (error) {
        console.error('Error details', error);
        res.status(500).send({error: 'Error when creating order'})
    }
}

exports.updateOrder = async (req, res, next) => {
    try{
        console.log(`ID ${req.params.id_order}`)
        const { id_product, amount } = req.body;

        const [update] = await Order.update({
            id_product, amount
        }, {where: {id: req.params.id_order} } 
    );

    if (update === 0){
        return res.status(404).json({error: 'Order not found'})
    }

    const updatedOrder = await Order.findOne({ where: { id: req.params.id_order}});

    const product = await Product.findOne({ where: {id: updatedOrder.id_product}});

    if (!product) {
        return res.status(404).json({ error: 'Product not found'});
    }

    res.status(200).json({
        amount: updatedOrder.amount,
        product: {
            id: product.id,
            description: product.description,
            price: product.price
        }
    })
    } catch(error) {
        console.error('Error details', error);
        res.status(500).send({error: 'Error when updating order'});
    }
}

exports.deleteOrder = async (req, res, next) => {
    try{
        const order = Order.destroy({
            where: { id:  req.params.id_order}
        })

        if (order === 0){
            return res.status(404).json({ error: 'Order not found'});
        }
        res.status(200).json({
            mensagem: 'Order has been deleted successfully',
        })
    } catch(error) {
        console.error('Error details', error);
        res.status(500).send({ error: 'Error when deleting order'});
    }
}