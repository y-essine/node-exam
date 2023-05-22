const express = require('express');
const app = express();

const { PORT } = require('./config');
const setup = require('./setup');
const mongo = require('./mongo');
const routes = require('./routes');

setup(app);
routes(app);
mongo();

app.listen(PORT, () => console.log(`Started server on http://localhost:${PORT}.`));