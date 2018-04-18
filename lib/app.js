const express = require('express');
const app = express();

//const routes = require('../lib/routes');
//const oceanAnimals = require('/models');

app.use(express.json());
app.use('/models');



module.exports = app;

