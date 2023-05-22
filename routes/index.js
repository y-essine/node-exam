const { authMiddleware } = require('../middleware');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const viewRoutes = require('./viewRoutes');

const routes = (app) => {
    app.use('/api/users', authMiddleware, userRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/', viewRoutes);
}

module.exports = routes;