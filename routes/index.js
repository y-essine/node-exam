const middleware = require('../middleware');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

const routes = (app) => {
    app.use('/api/users', middleware, userRoutes);
    app.use('/api/auth', authRoutes);
}

module.exports = routes;