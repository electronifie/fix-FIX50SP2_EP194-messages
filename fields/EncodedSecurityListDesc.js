var invert = require('invert-obj');

function EncodedSecurityListDesc (encodedSecurityListDesc) {
  this.message = encodedSecurityListDesc;
}

EncodedSecurityListDesc.prototype.value = function () {
  return this.message;
};

EncodedSecurityListDesc.Tag = '1469';

EncodedSecurityListDesc.Type = 'DATA';

module.exports = EncodedSecurityListDesc;