const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/scripts/:file', (req, res) => {
    res.sendFile(req.params.file, { root: './views/scripts' });
});

module.exports = router;