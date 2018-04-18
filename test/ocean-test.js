const express = require('express');
const app = express();
const oceanAnimals = require('./lib/ocean');


app.use(express.json());
app.use('/ocean', oceanAnimals);

module.exports = app.use;


