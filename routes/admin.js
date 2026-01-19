const {Router} = require('express');
const adminRouter = Router();
const {AdminModel, CourseModel} = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');

adminRouter.use(require('express').json());


adminRouter.post('/signup', async (req, res) => {
    const adminData = new AdminModel({
            username: req.body.username,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        });
    
        try {
            await adminData.save();
            res.status(201).json({ message: 'Admin created successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
});

adminRouter.post('/login', (req, res) => {
    res.send('Admin Login Page');
});

adminRouter.post('/course', (req, res) => {
    res.send('Create Course Page');
});

adminRouter.put('/course/:id', (req, res) => {
    res.send(`Update Course with id ${req.params.id}`);
});

adminRouter.get('/courses', (req, res) => {
    res.send('Admin Courses Page');
});

adminRouter.get('/course/bulk', (req, res) => {
    res.send('Bulk Course Upload Page');
});

module.exports = adminRouter;