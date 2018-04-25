const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema({
    //object fields
    title: {
        type: String,
        required: true
    },

    awards: String,
    rating: String,
    genre: String,
    info: {
        year: Number
    },
});
    



module.exports = mongoose.model('Movie', schema);
