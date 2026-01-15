const express = require('express');
const userRouter = express.Router();
const {UserModel} = require('../models/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


userRouter.use(express.json());

userRouter.post('/signup', async (req, res) => {
    const userData = new UserModel({
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, 10),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    try {
        await userData.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

userRouter.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({username: email});
        if (!user) {
            return res.status(401).json({message: 'Invalid email or password'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({message: 'Invalid email or password'});
        }
        const token = jwt.sign({username: user.username}, process.env.JWT_SECRET);
        res.json({token});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

userRouter.get('/logout', async (req, res) => {
    // Clear the JWT cookie on logout
    res.clearCookie('token');
    res.json({ message: 'Logged out successfully' });
});

userRouter.get('/purchases', async (req, res) => {
    try {
        const purchases = await PurchaseModel.find({userId: req.user._id}).populate('courseId').exec();
        res.json(purchases);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = userRouter;