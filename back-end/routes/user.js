const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user-controller')


router.get('/', UserController.getAllUsers);

router.post('/register', UserController.registerUser);

module.exports = router;