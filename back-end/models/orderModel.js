const Sequelize = require('sequelize');
const database = require('../db');
const Product = require('./productModel'); 

const Order = database.define('order_db', { 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

// Definindo a associação correta com a chave estrangeira
Order.belongsTo(Product, { foreignKey: 'id_product', allowNull: false });

// Sincroniza o modelo Orders com o banco de dados
Order.sync() // { force: true } recria a tabela sempre que o código for executado
    .then(() => console.log('Tabela Orders criada com sucesso'))
    .catch((error) => console.error('Erro ao criar tabela Orders:', error));

module.exports = Order;