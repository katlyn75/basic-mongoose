/*eslint no-console:off*/

import { connect } from 'net';

const http = require('http');
const app = require('./lib/ocean');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB || 'mongodb://localhost:27017/ocean';

connect(MONGODB_URI);


const server = http.createServer(app);
server.listen(PORT, () => {
    console.log('Server hears you', server.address().port());
});

