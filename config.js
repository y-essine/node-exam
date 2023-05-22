const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    SOCKETS_PORT: process.env.SOCKETS_PORT
}