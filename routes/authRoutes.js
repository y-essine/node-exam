const express = require('express');
const router = express();

const { authController } = require('../controllers');

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

