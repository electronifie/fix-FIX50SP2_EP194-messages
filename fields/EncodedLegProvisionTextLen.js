var invert = require('invert-obj');

function EncodedLegProvisionTextLen (encodedLegProvisionTextLen) {
  this.message = encodedLegProvisionTextLen;
}

EncodedLegProvisionTextLen.prototype.value = function () {
  return this.message;
};

EncodedLegProvisionTextLen.Tag = '40980';

EncodedLegProvisionTextLen.Type = 'LENGTH';

module.exports = EncodedLegProvisionTextLen;