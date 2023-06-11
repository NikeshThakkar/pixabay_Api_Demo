const express = require('express');
const app = express();
const cors = require('cors');

// allow express to use json format
app.use(express.json());

// allow cors for getting requestes from any url
app.use(cors({
    allowedHeaders: '*',
    origin: '*'
}));


module.exports = app;