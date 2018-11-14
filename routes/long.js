const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    setTimeout(() => {
        res.status(200).send(String(Date.now()));
    }, 5000)
});

module.exports = router;