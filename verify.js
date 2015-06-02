var signer = require('./helpers/signer');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var file = argv.f;
var document = JSON.parse(fs.readFileSync(file));
console.log('valid', signer.verify(document, 'public_key.pem'))