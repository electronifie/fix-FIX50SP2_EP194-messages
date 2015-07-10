var invert = require('invert-obj');

function EncodedProvisionTextLen (encodedProvisionTextLen) {
  this.message = encodedProvisionTextLen;
}

EncodedProvisionTextLen.prototype.value = function () {
  return this.message;
};

EncodedProvisionTextLen.Tag = '40986';

EncodedProvisionTextLen.Type = 'LENGTH';

module.exports = EncodedProvisionTextLen;