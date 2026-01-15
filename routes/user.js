const express = require('express');
const userRouter = express.Router();
const {UserModel} = require('../models/db');

userRouter.use(express.json());

userRouter.post('/signup', (req, res) => {
    res.send('Signup Page');
});

userRouter.post('/login', (req, res) => {
    res.send('Login Page');
});

userRouter.get('/logout', (req, res) => {
    res.send('Logout Page');
});

userRouter.get('/purchases', (req, res) => {
    res.send('Purchases Page');
});


module.exports = userRouter;