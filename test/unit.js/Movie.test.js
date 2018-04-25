const { assert } = require('chai');
const Movie = require('../../lib/models/Movie');


describe('Movie model', () => {
    
    
    it('valid model', () => {
        const data = {
            title: 'Legend',
            awards: 'none',
            rating: 'B+',
            genre: 'romance',
            info: {
                year: 1987
            },
        };
        
        const movie = new Movie(data);


        /*these lines of code mean the same as the assert line of code.  
        const obj;
        obj._id = movie._id;
        Object.keys(data).forEach(key => {
            obj[key] = data[key;]
        })*/
       
        assert.deepEqual(movie.toJSON(), { _id: movie._id, ...data });
        assert.isUndefined(movie.validateSync());

    });
    

    it('required fields', () => {
        const movie = new Movie({});
        const validation = movie.validateSync();
        assert.isDefined('validation', 'you have erred');
        const { errors } = validation;

        assert.equal(errors.title.kind, 'required');

    });
});

