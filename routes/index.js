const { authMiddleware } = require('../middleware');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');
const viewRoutes = require('./viewRoutes');

const routes = (app) => {
    app.use('/api/users', authMiddleware, userRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/', viewRoutes);
}

module.exports = routes;