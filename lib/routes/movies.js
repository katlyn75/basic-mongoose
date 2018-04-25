const router = require('express').Router();
const Movie = require('../models/Movie');


module.exports = router
    .post('/', (req, res) => {
        Movie.create(req.body)
            .then(movie => res.json(movie));
    })

    .get('/:id', (req, res) => {
        const { id } = req.params;

        Movie.findById(id)
            .lean()
            .then(movies => {
                res.json(movies);

            }, req, res);
    })

    .get('/', (req, res) => {
        Movie.find(req.query)
            .lean()
            .select('legend')
            .then(movies => res.json(movies));
    });

    