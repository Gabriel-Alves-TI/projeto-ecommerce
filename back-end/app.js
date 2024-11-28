const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const productRoute = require('./routes/products');
const orderRoute = require('./routes/order');
const userRoute = require('./routes/user');


app.use(cors({ origin: '*'}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use('/products', productRoute);
app.use('/order', orderRoute);
app.use('/user', userRoute);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app;