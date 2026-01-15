const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');
const adminRouter = require('./routes/admin');
const { connect } = require('mongoose');

app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/admin', adminRouter);

async function startServer() {
    try {
        await connect("mongodb+srv://sujeet17das:Sujeet%401712@cluster0.uojttkq.mongodb.net/");
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
}
startServer();

