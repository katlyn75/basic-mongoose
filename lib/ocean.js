const express = require('express');
const app = require('./lib/ocean');
const oceanAnimals = oceanAnimals;

app.use(express.json());
app.use('/ocean', oceanAnimals);

module.exports.app;