var invert = require('invert-obj');

function EncodedUnderlyingProvisionTextLen (encodedUnderlyingProvisionTextLen) {
  this.message = encodedUnderlyingProvisionTextLen;
}

EncodedUnderlyingProvisionTextLen.prototype.value = function () {
  return this.message;
};

EncodedUnderlyingProvisionTextLen.Tag = '42171';

EncodedUnderlyingProvisionTextLen.Type = 'LENGTH';

module.exports = EncodedUnderlyingProvisionTextLen;