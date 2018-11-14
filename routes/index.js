const express = require('express');
const router = express.Router();
const stream = require('./stream');
const long = require('./long');

router.use('/stream', stream);
router.use('/long', long);

router.get('/', (req, res) => { 
    res.status(200).send('Hello World!');
});

module.exports = router;