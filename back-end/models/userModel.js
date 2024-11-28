const Sequelize = require('sequelize');
const database = require('../db');


const User = database.define('user_db', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

User.sync() // { force: true } recria a tabela sempre que o código for executado
    .then(() => console.log('Tabela Orders criada com sucesso'))
    .catch((error) => console.error('Erro ao criar tabela Users:', error));

module.exports = User;