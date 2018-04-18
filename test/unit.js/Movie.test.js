const { assert } = require('chai');
const Movie = require('../../lib/models/Movie');


describe('Movies model', () => {

    it('valid model', () => {
        const data = {
            title: 'Legend',
            awards: 'none',
            rating: 'B+',
            genre: 'romance'
        };
        const movie = new Movie(data);

        /*these lines of code mean the same as the assert line of code.  
        const obj;
        obj._id = movie._id;
        Object.keys(data).forEach(key => {
            obj[key] = data[key;]
        })*/
       
        assert.deepEqual(movie.toJSON(), { _id:movie._id, ...data });
    });
});