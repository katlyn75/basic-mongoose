//const { assert } = require('chai');
const express = require('express');
const app = express();
const movies = require('./lib/movies');


app.use(express.json());
app.use('/models/movies', movies);



module.exports = app.use;


