/*eslint no-console:off*/

const http = require('http');
const app = require('./lib/app');
const connect = require('./lib/connect');


const PORT = process.env.PORT || 3000;

//used only for heroku
const MONGODB_URI = process.env.MONGODB || 'mongodb://localhost:27017/movies';

connect(MONGODB_URI);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('Server hears you', server.address().port());
});

