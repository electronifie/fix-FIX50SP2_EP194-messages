var invert = require('invert-obj');

function EncodedSecurityListDescLen (encodedSecurityListDescLen) {
  this.message = encodedSecurityListDescLen;
}

EncodedSecurityListDescLen.prototype.value = function () {
  return this.message;
};

EncodedSecurityListDescLen.Tag = '1468';

EncodedSecurityListDescLen.Type = 'LENGTH';

module.exports = EncodedSecurityListDescLen;