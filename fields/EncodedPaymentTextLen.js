var invert = require('invert-obj');

function EncodedPaymentTextLen (encodedPaymentTextLen) {
  this.message = encodedPaymentTextLen;
}

EncodedPaymentTextLen.prototype.value = function () {
  return this.message;
};

EncodedPaymentTextLen.Tag = '40984';

EncodedPaymentTextLen.Type = 'LENGTH';

module.exports = EncodedPaymentTextLen;