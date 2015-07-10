var invert = require('invert-obj');

function EncodedComplianceTextLen (encodedComplianceTextLen) {
  this.message = encodedComplianceTextLen;
}

EncodedComplianceTextLen.prototype.value = function () {
  return this.message;
};

EncodedComplianceTextLen.Tag = '2351';

EncodedComplianceTextLen.Type = 'LENGTH';

module.exports = EncodedComplianceTextLen;