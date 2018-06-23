const express = require('express');
const router = express.Router();
const stream = require('./stream');

router.use('/stream', stream);

router.get('/', (req, res) => { 
    res.status(200).send('Hello World!');
});

module.exports = router;