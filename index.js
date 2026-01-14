const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', (req,res) => {
    res.send('Signup Page');
});

app.get('/login', (req,res) => {
    res.send('Login Page');
});

app.get('/logout', (req,res) => {
    res.send('Logout Page');
});

app.post('/purchase', (req, res) => {
    res.send('Purchase Page');
});

app.get('/profile', (req, res) => {
    res.send('Profile Page');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});