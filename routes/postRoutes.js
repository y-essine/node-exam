const express = require('express');
const router = express.Router();

const { validationMiddleware } = require('../middleware');
const { postController } = require('../controllers');

router.get('/', postController.getAll);
router.post('/', validationMiddleware, postController.create);

module.exports = router;