const Sequelize = require('sequelize');
const database = require('../db');


const Product = database.define('product_db', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
        
    }
})

// Sincroniza o modelo Product com o banco de dados
Product.sync() // { force: true } recria a tabela sempre que o código for executado
    .then(() => console.log('Tabela Orders criada com sucesso'))
    .catch((error) => console.error('Erro ao criar tabela Orders:', error));

module.exports = Product;