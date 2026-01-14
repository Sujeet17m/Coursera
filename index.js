const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/user/signup', (req,res) => {
    res.send('Signup Page');
});

app.post('/user/login', (req,res) => {
    res.send('Login Page');
});

app.get('/logout', (req,res) => {
    res.send('Logout Page');
});

app.post('/course/purchase', (req, res) => {
    res.send('Purchase Page');
});

app.get('/user/purchases', (req, res) => {
    res.send('Purchases Page');
});

app.get('/courses', (req, res) => {
    res.send('Profile Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});