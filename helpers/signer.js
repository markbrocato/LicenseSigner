var crypto = require('crypto');
var fs = require('fs');

module.exports = {
    /**
     * Returns the signature for the specified string data
     * @param {Object} document A document to sign
     * @param {String} privateKeyPath The path to private key
     * @returns {Object} The document with a signature attribute added containing the digital signature
     */
    sign: function(document, privateKeyPath) {
        var privateKey = fs.readFileSync(privateKeyPath).toString('utf8');
        var sign = crypto.createSign('RSA-SHA256');
        var data = JSON.stringify(document);
        sign.update(data);
        document.signature = sign.sign(privateKey, 'hex');
        return document;
    },

    /**
     * Verifies the specified signature
     * @param {Object} document The document that was signed
     * @param {String} publicKeyPath The path to public key
     * @returns {Boolean}
     */
    verify: function(document, publicKeyPath) {
        var publicKey = fs.readFileSync(publicKeyPath).toString('utf8');
        var signature = document.signature;
        delete document.signature;
        var verify = crypto.createVerify('RSA-SHA256');
        verify.update(JSON.stringify(document));
        return verify.verify(publicKey, signature, 'hex')
    }
};
