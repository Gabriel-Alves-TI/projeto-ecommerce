const Product = require('../models/productModel');

exports.getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ error: 'Erro when searching for products'})
    }
};

exports.getProductById = async (req, res, next) => {
    try {
        console.log(`ID ${req.params.id_product} received`);

        const product = await Product.findOne({
            where: { id: req.params.id_product}
        })
        res.status(200).json({
            description: product.description,
            price: product.price
        })

        if (id === 0) {
            res.status(404).send({
                mensagem: 'Product not found',
            })
        } 
    } catch (error) {
        res.status(500).send({ error: 'Error when searching for products'});
    }
};

exports.createProduct = async (req, res, next) => {
    try{
        const { description, price} = req.body;
        const product = await Product.create({
            description, 
            price
        })
        res.status(201).json({
            id: product.id,
            description: product.description,
            price: product.price
        })
    } catch {
        res.status(500).json({ error: 'Error when creating new product'})
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        console.log(`ID ${req.params.id_product} received on route`)

        const { description, price } = req.body;

        // Atualiza o produto e verifica se algum registro foi atualizado
        const [updated] = await Product.update(
            { description, price },
            { where: { id: req.params.id_product } }
        );

        if (updated === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Busca o produto atualizado
        const updatedProduct = await Product.findOne({ where: { id: req.params.id_product } });

        res.status(200).json({
            description: updatedProduct.description,
            price: updatedProduct.price
        });
    } catch (error) {
        console.error('Detalied error: ', error);
        res.status(500).send({ error: 'Error when updating product' });
    }
};

exports.deleteProduct = async (req, res, next) => {
    try {
        console.log(`ID ${req.params.id_product} received on route DELETE`)

        const product = await Product.destroy({
            where: { id: req.params.id_product}
        });

        if (product === 0) {
            return res.status(404).json({ error: 'Error locating product'})
        }
        res.status(200).json({
            mensagem: 'Product has been deleted successfully.'
        })
    }  catch (error) {
        res.status(500).send({ error: 'Error when deleting product.'})
    }
}