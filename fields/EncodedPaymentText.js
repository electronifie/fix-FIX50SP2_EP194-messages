var invert = require('invert-obj');

function EncodedPaymentText (encodedPaymentText) {
  this.message = encodedPaymentText;
}

EncodedPaymentText.prototype.value = function () {
  return this.message;
};

EncodedPaymentText.Tag = '40985';

EncodedPaymentText.Type = 'DATA';

module.exports = EncodedPaymentText;