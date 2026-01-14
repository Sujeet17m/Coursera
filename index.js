const express = require('express');
const app = express();
const port = 3000;
const jwt = require('jsonwebtoken');
const userRouter = require('./routes/user');
const courseRouter = require('./routes/course');

app.use(express.json());

app.use('/user', userRouter);
app.use('/course', courseRouter);



Router.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});