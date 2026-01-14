const express = require('express');
const courseRouter = express.Router();

courseRouter.use(express.json());


courseRouter.post('/purchase', (req, res) => {
    res.send('Purchase Page');
});

module.exports = courseRouter;