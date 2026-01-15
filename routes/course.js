const express = require('express');
const courseRouter = express.Router();
const {CourseModel, PurchaseModel} = require('../models/db');

courseRouter.use(express.json());


courseRouter.post('/purchase', (req, res) => {
    res.send('Purchase Page');
});

courseRouter.get('/preview', (req, res) => {
    res.send('Course Preview Page');
});

module.exports = courseRouter;