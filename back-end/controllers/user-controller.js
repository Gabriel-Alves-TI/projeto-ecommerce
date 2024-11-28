const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res, next) => {
    try{
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error when connection API'})
        console.error('Error when seaching all users');
    }
}

exports.registerUser = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields'});
        }

        const existingUser = await User.findOne(
            { where: { email } }
        )
        if (existingUser) {
            return res.status(409).json({ error: 'Email already in use'});
        }

        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).send({ error: 'Error hashing password'});
            }

            try{
                const newUser = await User.create({
                    username, 
                    email,
                    password: hash,
                });

                res.status(201).json({
                    message: 'User registered successfully',
                    user: {
                        id: newUser.id,
                        username: newUser.username,
                        email: newUser.email,
                    },
                });
            } catch (dbError) {
                res.status(500).json({ error: 'Error saving user to database', details: dbError})
            }
        })
    } catch (error) {
        res.status(500).json({ error: 'Error when registering user', details: error});
    }
}