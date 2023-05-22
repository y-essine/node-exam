const userRoutes = require('./userRoutes');

const routes = (app) => {
    app.use('/api/users', userRoutes);
}

module.exports = routes;