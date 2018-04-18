const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema({
    //object fields
    title: String,
    awards: String,
    rating: String,
    genre: String

});


module.exports = mongoose.model('Movie', schema);
