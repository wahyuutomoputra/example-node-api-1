const express = require('express');
const bodyParser = require('body-parser');

const {
    user,
    auth
} = require('./app/routes')

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/user', user);
app.use('/auth', auth);

app.listen(8080);