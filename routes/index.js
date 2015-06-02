var express = require('express');
var router = express.Router();
var signer = require('../helpers/signer');

/* signs posted json data. */
router.post('/', function(req, res, next) {
    var data = req.body.data;
    var privateKey = 'private_key.pem';

    try {
        res.send(signer.sign(JSON.parse(data), privateKey))
    } catch(e) {
        res.status(500).json({error: e.message})
    }
});

module.exports = router;
