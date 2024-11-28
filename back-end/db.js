const Sequelize = require('sequelize');
const sequelize = new Sequelize('ecommerce', 'root', 'root', { 
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306
})


sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})

module.exports = sequelize;