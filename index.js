const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');
const adminRouter = require('./routes/admin');
require('dotenv').config();
const { connect } = require('mongoose');

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

async function startServer() {
    try {
        await connect(process.env.DB_URL);
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB", error.message);
    }
}
startServer();

