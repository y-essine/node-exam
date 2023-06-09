const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const setup = (app) => {
    app.use(helmet())
    .use(cors())
    .use(morgan('combined'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'twig');
}

module.exports = setup;