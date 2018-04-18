const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    //object fields
    name: String

});


module.exports = mongoose.model('Movie', schema);
