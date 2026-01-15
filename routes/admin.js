const {Router} = require('express');
const adminRouter = Router();
const {AdminModel, CourseModel} = require('../models/db');

adminRouter.post('/signup', (req, res) => {
    res.send('Admin Signup Page');
});

adminRouter.post('/login', (req, res) => {
    res.send('Admin Login Page');
});

adminRouter.post('/', (req, res) => {
    res.send('Create Course Page');
});

adminRouter.put('/:id', (req, res) => {
    res.send(`Update Course with id ${req.params.id}`);
});

adminRouter.get('/courses', (req, res) => {
    res.send('Admin Courses Page');
});

adminRouter.get('/course/bulk', (req, res) => {
    res.send('Bulk Course Upload Page');
});

module.exports = adminRouter;