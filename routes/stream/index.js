const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

const file = path.resolve(__dirname, 'big.file');

router.get('/with', (req, res) => { 
    const stream = fs.createReadStream(file);
    
    stream.pipe(res);
});

router.get('/without', (req, res) => { 
    const stream = fs.readFile(file, (err, data) => {
        res.end(data.toString('utf8'));
    });
});

module.exports = router;