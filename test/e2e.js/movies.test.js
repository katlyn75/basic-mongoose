const { assert } = require('chai');
const request = require('./request');
const Movie = require('../../lib/models/Movie');
const { dropCollection } = require('./db');


describe('movies API', () => {
    before(() => dropCollection('movies'));

    let legend = {
        title: 'Legend',
        awards: 'none',
        rating: 'B+',
        genre: 'romance',
        info: {
            year: 1987
        }
    };


    it('gets a movie', () => {
        return request.post('/movies')
            .send(legend)
            .then(({ body }) => {
                const { _id, _v } = body;
                assert.ok(_id);
                assert.equal(_v, 0);
                assert.deepEqual(body, {
                    _id, _v, ...legend
                });
                legend = body;

            });
    });

    const roundTrip = doc => {
        JSON.parse(JSON.stringify(doc.toJSON()));
    };

    it('gets a movie by id', () => {
        return Movie.create(legend).then(roundTrip)
            .then(saved => {
                legend = saved;
                return request.get(`/movies/${legend._id}`);
            })
            .then(({ body }) => {
                assert.deepEqual(body, legend);
            });
    });



    
});