const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const User = require('../models/userModel');

router.get('*', async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id, { password: 0, posts: 0 });
        if (!user) {
            return res.status(401).json({ message: 'Invalid token.' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
});

module.exports = router;