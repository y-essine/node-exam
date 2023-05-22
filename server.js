const express = require('express');
const app = express();
const http = require('http');

const { PORT } = require('./config');
const setup = require('./setup');
const mongo = require('./mongo');
const routes = require('./routes');
const setupsockets = require('./sockets.js');

setup(app);
routes(app);
mongo();

const server = http.createServer(app);

setupsockets(server);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));